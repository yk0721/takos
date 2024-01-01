import { useSignal } from "@preact/signals";
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import UnderMenu from '../components/UnderMenu.tsx'
export default function Home() {
  const count = useSignal(3);
  return (
    <>
<div class="min-h-screen bg-black flex flex-row justify-center items-center text-white">
  <div class="flex flex-col justify-center items-center space-y-6 w-1/2">
    <div>
      <img src="./logo2.png" alt="logo" class="w-full"/>
    </div>
  </div>
  <div class="flex flex-col justify-start items-start space-y-3 w-1/2">
    <div class="text-left">
      <h1 class="text-5xl font-bold mb-3">tako's</h1>
      <p class="text-lg mb-8">tako'sは〜</p>
    </div>
    <div class="flex flex-col space-y-3 mb-8">
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-black w-64">
        Google で登録
      </button>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-black border border-white text-white w-64">
        Appleのアカウントで登録
      </button>
      <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white w-64">
        アカウントを作成
      </button>
    </div>
    <div class="text-left text-sm mb-8">
      <p>
        アカウントを登録することにより、利用規約とプライバシーポリシー（Cookieの使用を含む）に同意したことになります。
      </p>
    </div>
    <div class="text-left text-sm mb-8">
      <p class="underline">アカウントをお持ちの場合</p>
    </div>
  </div>
  <div class="text-xs text-gray-400 absolute bottom-0 left-0 right-0 flex justify-center p-4">
    <p>
      基本情報 マルチプラットフォーム ヘルプセンター 利用規約 プライバシーポリシー Cookieのポリシー アクセシビリティ
      広告情報 ブログ ステータス 法的情報 マーケティング パートナーシップ デベロッパーズ ポータル
      プロフィールディレクトリ 設定 © 2024 X Corp.
    </p>
  </div>
</div>
    </>
  );
}
