import React from 'react';
import Image from 'next/image';
import { Cocktail } from '@/types/cocktail'; 

const CocktailListItem: React.FC<{ cocktail: Cocktail }> = ({ cocktail }) => {
  
  const hasDetails = cocktail.ingredients && cocktail.ingredients.length > 0 && cocktail.method;
  
  // TheCocktailDBから返される画像URLは http: で始まることがあり、Next.jsの<Image>では設定が必要です。
  // 一旦、ここではシンプルな <img> タグを使いますが、本番ではnext.config.jsの設定を推奨します。

  return (
    <li className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      
      {/* 1. ★ 画像表示エリアを追加 */}
      {cocktail.imageUrl && (
        <div className="flex-shrink-0 w-16 h-16 mr-4 relative">
          {/* Next.jsのImageコンポーネントを使う場合、next.config.jsにドメイン登録が必要です */}
          {/* 暫定的に標準の <img> タグを使用し、スタイルを調整します */}
          <img
            src={cocktail.imageUrl}
            alt={cocktail.name}
            className="w-full h-full object-cover rounded-full"
            width={64}
            height={64}
          />
        </div>
      )}
      
      <div>
        <h2 className="text-xl font-semibold text-indigo-700">{cocktail.name}</h2>
        
        {/* 2. 情報が不足している場合の表示調整 */}
        {hasDetails ? (
            <p className="text-sm text-gray-500">
                ベース: {cocktail.base} / 製法: {cocktail.method}
            </p>
        ) : (
            <p className="text-sm text-red-500">
                詳細情報は現在表示できません (APIからの情報不足)
            </p>
        )}
        
        {/* TODO: ここにホバーポップオーバーの実装を追加する */}
      </div>
    </li>
  );
};

// ... CocktailListProps および CocktailList コンポーネントは変更なし ...
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
