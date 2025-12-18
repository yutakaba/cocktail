import CocktailList from '@/components/CocktailList'

async function getCocktails(base: string) {
  // 環境変数が設定されていない場合のフォールバック（デバッグ用）
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
  
  const res = await fetch(
    `${baseUrl}/api/v1/cocktails/${base}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // 開発中に原因がわかるよう、ステータスコードを含めると便利です
    throw new Error(`Failed to fetch cocktail data: ${res.status}`);
  }
  return res.json();
}

export default async function GinPage() {
  // データの取得中にエラーが発生した場合、Next.jsのerror.tsxが呼ばれます
  const ginCocktails = await getCocktails('gin');

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 見出しのスタイリング */}
        <div className="mb-8 border-b border-indigo-200 pb-4">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Gin Based Cocktails
            <span className="block text-lg font-medium text-indigo-600 mt-2">
              ジンベースのカクテル一覧
            </span>
          </h1>
        </div>

        {/* 共通コンポーネントの呼び出し */}
        <section className="bg-white rounded-2xl shadow-sm p-2">
          <CocktailList cocktails={ginCocktails} />
        </section>

        {/* 戻るボタンなどのナビゲーション（任意） */}
        <div className="mt-8 text-center">
          <a href="/" className="text-indigo-600 hover:text-indigo-500 font-medium">
            ← トップページへ戻る
          </a>
        </div>
      </div>
    </main>
  );
}