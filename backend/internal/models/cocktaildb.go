package models

type CocktailDBFilterResponse struct {
    Drinks []CocktailDBFilterDrink `json:"drinks"`
}

type CocktailDBFilterDrink struct {
    IDDrink       string `json:"idDrink"`
    StrDrink      string `json:"strDrink"`
    StrDrinkThumb string `json:"strDrinkThumb"`
}


// ★★★ ルックアップAPIのレスポンス構造体 (詳細版) ★★★
// 必要であれば、後でIDで詳細を取得するために利用
// (ここでは一旦コメントアウト、後続のステップで使う可能性があります)
/*
type CocktailDBDetailResponse struct {
    Drinks []CocktailDBDrinkDetail `json:"drinks"`
}
type CocktailDBDrinkDetail struct {
    // ... 前回の回答で定義した StrIngredient1 など、全ての詳細フィールドをここに定義 ...
}
*/