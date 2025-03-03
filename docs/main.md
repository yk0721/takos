# takos protocpl仕様

takosはTrustworthy Alternative Knowledge-sharing Open-source Systemの略です

takosは分散型チャット用のプロトコルです。
matrixに近いものですが、matrixではLINEのようなものを作れないので策定。
ちなみにdocsはmatrixを参考に策定しています

## 理念

既存の中央集権的なメッセージングサービスとは異なり、各サーバーで競争が行われ、消費者にとって良い機能が提供されることを目指しています。
ブロックチェーンではなく、「サーバー」を残したのはブロックチェーンでは過度に匿名性が保たれ、検閲が困難になるため、悪意あるユーザーが増えると考えたためです。
このソフトウェアの分散型機能では中央集権的な情報の支配を打開するものであり、匿名性を向上させるものではありません。
理想を追い求めるのではなく、現実的にユーザーにとって最適な選択肢を提供することを目指しています。

## api

matrixとは違い、クライアントapiは独自のものをそれぞれのサーバーが策定します。
takos protocolが策定するのはサーバ間apiのみである

[foundation api](./foundation)

## メッセージ暗号化の規格

[crypto algorithm](./crypto)

## takos foundation apiが従う原則

- REST API
- シンプルで他のサービスへの依存関係のない
- オープン

## takosの提供する機能

- 分散的にメッセージを保存するが、チャットルームの管理の自治権は特定のサーバーが保有する
- メッセージの暗号化と署名
- Groupの管理
- Groupの権限システム

## アーキテクチャ

takosはイベントがあるたびに、他のサーバーへapiで伝えてます。
サーバー間で共有するデーターは最小限であり共有する必要のないデータはクライアントから各サーバーへgetします。
例えば、メッセージはidと送信者のみを保存し、idをもとに各サーバーからデータを取得します。

## ユーザー

ユーザーidによりuserNameとサーバーを認識します。

```
userName@domain
```

## デバイス

デバイスにはそれぞれ一意の`device_id`が割り振られ、鍵共有の識別に充てられます。
uuid v7です

## イベント

takosのサーバー間apiで通信はすべてイベントidが識別されます。
一定期間でかつ一意のeventIdでのみリクエストを受け付ける

eventIdの形式はuuid v7です

## 部屋の構造

ルームにはそれぞれidがあり、識別します。また、メッセージに含めることで改ざんを防ぎます

### group/publicGroupの場合

```
uuidv7@domain
```

### friend(DM)の場合

```
friendId
```

### group/publicGroupの状態の同期

groupの状態の変更の権限はすべて、Gorupのサーバーが持ちます。
他のサーバーはGroupのサーバーからの情報を受け取り、それを元に自身のデータを更新します。
他のサーバーが状態を変更するためには、Roleにより間接的に権限を持つ必要があります。

### プロフィール

ユーザーは自分のアカウントに関連付けられた任意のキー/値データを公開できます。

## 共通の概念

すべてのTakos Apiに共通する様々なものがあります。

### Event types

すべてのイベントは、イベントのタイプを示す `type` フィールドを持ちます。
これは、イベントの内容を理解するために使用されます。

仕様で定義されているイベントタイプは、`t.` で始まります。
これは、Matrixのイベントタイプが `t.` で始まることと同様です。
また、任意のカスタムイベントタイプを定義することができます。これらは競合を防ぐためにjavaパッケージの命名規則を使用する必要があります。

例えば仕様で定義されているイベントタイプは特別な`t.`で名前空間化されていますが、イベントを名前空間に配置する必要はありません。

### タイムスタンプ

特に明記がない限りタイムスタンプはUNIXエポックス(1970年1月1日午前0時0分0秒UTC)からのミリ秒数で表されます。
うるう秒を考慮する必要はありません。したがって、一日は正確に86400000ミリ秒です。

これはうる秒にタイムスタンプが繰り返される可能性を意味します。

## 仕様バージョン

takosは、`vX.Y.Z`の形式でバージョン番号を持ちます。
これは、仕様のバージョンを示します。
この仕様のバージョンは、仕様の変更を追跡するために使用されます。

Xは大きな変更を示し、Yは小さな変更を示し、Zはバグ修正を示します。

### エンドポイントのバージョン管理

仕様内のすべてのエンドポイントには個別のバージョン管理がされており、そのバージョンはエンドポイントのパスに含まれます。

例えば、`_takos/v1/` はバージョン1のエンドポイントを示します。

### LICENSE

Apache License 2.0

公式実装は AGPL-3.0で公開されます。
