import React from 'react';
import { Cocktail } from '@/types/cocktail'; 

const CocktailListItem: React.FC<{ cocktail: Cocktail }> = ({ cocktail }) => {
  return (
    <li className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <h2 className="text-xl font-semibold text-indigo-700">{cocktail.name}</h2>
      <p className="text-sm text-gray-500">ベース: {cocktail.base_liquor} / 製法: {cocktail.method}</p>
      {/* TODO: ここにホバーポップオーバーの実装を追加する */}
    </li>
  );
};

interface CocktailListProps {
  cocktails: Cocktail[];
}

const CocktailList: React.FC<CocktailListProps> = ({ cocktails }) => {
  if (!cocktails || cocktails.length === 0) {
    return <p className="text-gray-600 p-8">カクテルが見つかりませんでした。</p>;
  }

  return (
    <ul className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg divide-y divide-gray-100 mt-4">
      {cocktails.map((cocktail) => (
        <CocktailListItem key={cocktail.id} cocktail={cocktail} />
      ))}
    </ul>
  );
};

export default CocktailList;