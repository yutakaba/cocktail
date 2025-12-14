import CocktailList from '@/components/CocktailList'

async function getCocktails(base: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cocktails/${base}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch cocktail data')
  }
  return res.json()
}

export default async function GinPage() {
  const ginCocktails = await getCocktails('gin')

  return (
    <div>
      <h1>ジンのカクテル一覧</h1>
      <CocktailList cocktails={ginCocktails} />
      {/* 取得したデータを表示 */}
    </div>
  );
}