import type {
  AccountKey,
  AccountKeyPrivate,
  AccountKeyPub,
  IdentityKey,
  IdentityKeyPrivate,
  IdentityKeyPub,
  MasterKey,
  MasterKeyPrivate,
  MasterKeyPub,
  Sign,
  deviceKeyPub,
  deviceKeyPrivate,
  deviceKey,
} from "./types.ts"
export type {
  AccountKey,
  AccountKeyPrivate,
  AccountKeyPub,
  IdentityKey,
  IdentityKeyPrivate,
  IdentityKeyPub,
  MasterKey,
  MasterKeyPrivate,
  MasterKeyPub,
  Sign,
}
import { decode, encode } from "base64-arraybuffer"

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  return encode(buffer)
}

export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  return decode(base64)
}

export async function exportfromJWK(key: CryptoKey): Promise<JsonWebKey> {
  return await crypto.subtle.exportKey("jwk", key)
}

// 文字列のハッシュを生成
async function hashString(input: string): Promise<string> {
  const buffer = new TextEncoder().encode(input)
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer)
  return [...new Uint8Array(hashBuffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
}

// JWK形式の鍵から公開鍵ハッシュを生成
async function generateKeyHashHex(jwk: JsonWebKey): Promise<string> {
  const keyString = JSON.stringify(jwk)
  return await hashString(keyString)
}

export async function createMasterKey(): Promise<MasterKey> {
  const KeyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-PSS",
      modulusLength: 4096,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  const MasterKeyPublickHex = await generateKeyHashHex(
    await crypto.subtle.exportKey("jwk", KeyPair.publicKey),
  )
  return {
    public: {
      key: await exportfromJWK(KeyPair.publicKey),
      keyType: "masterPub",
    },
    private: {
      key: await exportfromJWK(KeyPair.privateKey),
      keyType: "masterPrivate",
    },
    hashHex: MasterKeyPublickHex,
  }
}

export async function createIdentityKeyAndAccountKey(
  masterKey: MasterKey,
): Promise<{ identityKey: IdentityKey; accountKey: AccountKey }> {
  const identityKeyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-PSS",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  const identityKeyPublic = await exportfromJWK(identityKeyPair.publicKey)
  const identityKeyPrivate = await exportfromJWK(identityKeyPair.privateKey)
  const identityKeyHash = await generateKeyHashHex(identityKeyPublic)

  const accountKeyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  const accountKeyPublic = await exportfromJWK(accountKeyPair.publicKey)
  const accountKeyPrivate = await exportfromJWK(accountKeyPair.privateKey)

  const identityKeySign = await signKey(
    masterKey,
    identityKeyPublic,
    "master",
  )
  const time = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365).toISOString()
  const sign2 = await signKeyExpiration(masterKey, time, "master")

  const identityKey: IdentityKey = {
    public: {
      key: identityKeyPublic,
      keyType: "identityPub",
      sign: identityKeySign,
      keyExpiration: time,
      keyExpirationSign: sign2,
    },
    private: {
      key: identityKeyPrivate,
      keyType: "identityPrivate",
    },
    hashHex: identityKeyHash,
  }

  const accountKeySign = await signKey(identityKey, accountKeyPublic, "identity")
  const accountKey: AccountKey = {
    public: {
      key: accountKeyPublic,
      keyType: "accountPub",
      sign: accountKeySign,
    },
    private: {
      key: accountKeyPrivate,
      keyType: "accountPrivate",
    },
    hashHex: identityKey.hashHex,
  }

  return { identityKey, accountKey }
}
export async function importKey(
  inputKey:
    | IdentityKeyPub
    | IdentityKeyPrivate
    | AccountKeyPub
    | AccountKeyPrivate
    | MasterKeyPub
    | MasterKeyPrivate,
  usages?: "public" | "private",
): Promise<CryptoKey> {
  const jwk = inputKey.key
  const keyType = inputKey.keyType
  let type: string
  switch (keyType) {
    case "identityPub":
      type = "RSA-PSS"
      break
    case "identityPrivate":
      type = "RSA-PSS"
      break
    case "accountPub":
      type = "RSA-OAEP"
      break
    case "accountPrivate":
      type = "RSA-OAEP"
      break
    case "masterPub":
      type = "RSA-PSS"
      break
    case "masterPrivate":
      type = "RSA-PSS"
      break
    default:
      throw new Error(`Unsupported keyType: ${keyType}`)
  }
  let key: CryptoKey
  if (type === "RSA-OAEP") {
    const keyUsages: KeyUsage[] = usages === "public" ? ["encrypt"] : ["decrypt"]
    key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: type, hash: { name: "SHA-256" } },
      true,
      keyUsages,
    )
  } else if (type === "RSA-PSS") {
    const keyUsages: KeyUsage[] = usages === "public" ? ["verify"] : ["sign"]
    key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: type, hash: { name: "SHA-256" } },
      true,
      keyUsages,
    )
  } else if (type === "AES-GCM") {
    key = await crypto.subtle.importKey("jwk", jwk, { name: "AES-GCM" }, true, [
      "encrypt",
      "decrypt",
    ])
  } else {
    throw new Error(`Unsupported type: ${type}`)
  }
  return key
}

export async function verifyKey(
  //署名した鍵の変数
  key: MasterKeyPub | IdentityKeyPub,
  signedKey: IdentityKeyPub | AccountKeyPub | deviceKeyPub | deviceKeyPrivate
): Promise<boolean> {
  const importedKey = await crypto.subtle.importKey(
    "jwk",
    key.key,
    { name: "RSA-PSS", hash: { name: "SHA-256" } },
    true,
    ["verify"],
  )
  const keyBuffer = new TextEncoder().encode(JSON.stringify(signedKey.key))

  return await crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    importedKey,
    base64ToArrayBuffer(signedKey.sign.signature),
    keyBuffer, // ensure the same data is used
  )
}

export async function signKey(
  //署名する鍵の変数
  key: MasterKey | IdentityKey,
  keyToSign: JsonWebKey,
  type: "master" | "identity",
): Promise<Sign> {
  const keyBuffer = new TextEncoder().encode(JSON.stringify(keyToSign))
  return await sign(
    key,
    keyBuffer,
    type,
  )
}

async function sign(
  key: MasterKey | IdentityKey,
  data: ArrayBuffer,
  type: "master" | "identity",
): Promise<Sign> {
  const signature = await crypto.subtle.sign(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    await importKey(key.private, "private"),
    data,
  )
  const publicKeyHashBuffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(JSON.stringify(key.public.key)),
  )
  const hashedPublicKeyHex = Array.from(new Uint8Array(publicKeyHashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")
  return {
    signature: arrayBufferToBase64(signature),
    hashedPublicKeyHex,
    type,
  }
}

export async function signKeyExpiration(
  key: MasterKey | IdentityKey,
  date: string,
  type: "master" | "identity",
): Promise<Sign> {
  const signResult = await sign(
    key,
    new TextEncoder().encode(date),
    type,
  )
  return signResult
}

export async function verifyKeyExpiration(
  key: MasterKeyPub | IdentityKeyPub,
  signedKey: { keyExpiration: string; keyExpirationSign: Sign },
): Promise<boolean> {
  try {
    const importedKey = await crypto.subtle.importKey(
      "jwk",
      key.key,
      { name: "RSA-PSS", hash: { name: "SHA-256" } },
      true,
      ["verify"],
    )

    const keyBuffer = new TextEncoder().encode(signedKey.keyExpiration)
    const signatureBuffer = base64ToArrayBuffer(signedKey.keyExpirationSign.signature)

    return await crypto.subtle.verify(
      {
        name: "RSA-PSS",
        saltLength: 32,
      },
      importedKey,
      signatureBuffer,
      keyBuffer,
    )
  } catch (error) {
    console.error("Verification failed:", error)
    return false
  }
}

export async function createDeviceKey(masterKey: MasterKey): Promise<deviceKey> {
  const deviceKeyPair = await crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  const deviceKeyPublic = await exportfromJWK(deviceKeyPair.publicKey)
  const deviceKeyPrivate = await exportfromJWK(deviceKeyPair.privateKey)
  const pubKeySign = await signKey(masterKey, deviceKeyPublic, "master")
  const privKeySign = await signKey(masterKey, deviceKeyPrivate, "master")
  return {
    public: {
      key: deviceKeyPublic,
      keyType: "devicePub",
      sign: pubKeySign,
    },
    private: {
      key: deviceKeyPrivate,
      keyType: "devicePrivate",
      sign: privKeySign,
    },
    hashHex: await generateKeyHashHex(deviceKeyPublic),
  }
}

export async function verifyDeviceKey(
  masterKey: MasterKeyPub,
  deviceKey: deviceKey,
): Promise<boolean> {
  return await verifyKey(masterKey, deviceKey.public) && await verifyKey(masterKey, deviceKey.private)
}

export async function verifyIdentityKey(
  masterKeyPub: MasterKeyPub,
  identityKey: IdentityKeyPub,
) {
  const masterKeyHashHex = await generateKeyHashHex(masterKeyPub.key)
  if (identityKey.sign.hashedPublicKeyHex !== masterKeyHashHex) {
    return false
  }
  const now = new Date()
  if (new Date(identityKey.keyExpiration) < now) {
    return false
  }

  return await verifyKey(masterKeyPub, identityKey) && await verifyKeyExpiration(masterKeyPub, identityKey)
}

export async function verifyAccountKey(
  identityKey: IdentityKeyPub,
  accountKey: AccountKeyPub,
): Promise<boolean> {
  const identityKeyHashHex = await generateKeyHashHex(identityKey.key)
  if (accountKey.sign.hashedPublicKeyHex !== identityKeyHashHex) {
    return false
  }
  return await verifyKey(identityKey, accountKey)
}


const masterKey = await createMasterKey()
const {
  identityKey,
  accountKey,
} = await createIdentityKeyAndAccountKey(masterKey)
const deviceKey2 = await createDeviceKey(masterKey)

//console.log(await verifyDeviceKey(masterKey.public, deviceKey2))
console.log(await verifyIdentityKey(masterKey.public, identityKey.public))
console.log(await verifyDeviceKey(masterKey.public, deviceKey2))
console.log(await verifyAccountKey(identityKey.public, accountKey.public))