export interface Cocktail {
  id: number;
  name: string;
  base: string;
  ingredients: string[];
  method: string;
  abv: number;
  imageUrl?: string;
}