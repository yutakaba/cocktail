export async function getCocktails(base: string) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';
    
    const res = await fetch(
      `${baseUrl}/api/v1/cocktails/${base}`,
      { cache: "no-store" }
    );
  
    if (!res.ok) {
      throw new Error(`Failed to fetch ${base} cocktail data: ${res.status}`);
    }
    
    return res.json();
  }