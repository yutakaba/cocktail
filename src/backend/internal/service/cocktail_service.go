package service

import (
	"github.com/yutakaba/cocktail-app-backend/internal/models"
	"strings"
)

// モックデータ (初期データの定義)
var mockCocktails = []models.Cocktail{
	{
		ID: 1, Name: "Martini", Base: "Gin",
		Ingredients: []string{"Gin", "Dry Vermouth"},
		Method:      "Stir", ABV: 35.0,
	},
	{
		ID: 2, Name: "Gimlet", Base: "Gin",
		Ingredients: []string{"Gin", "Lime Juice", "Sugar"},
		Method:      "Shake", ABV: 20.0,
	},
	{
		ID: 3, Name: "Cosmopolitan", Base: "Vodka",
		Ingredients: []string{"Vodka", "Cranberry Juice", "Lime Juice"},
		Method:      "Shake", ABV: 18.5,
	},
	// 他のベースのカクテルも追加できます
}

// GetCocktailsByBase は指定されたベースリカーのカクテル一覧を返します。
// (現在はモックデータをフィルタリングしている)
func GetCocktailsByBase(baseName string) []models.Cocktail {
	var results []models.Cocktail
	// 比較を容易にするため、全て小文字に変換
	lowerBaseName := strings.ToLower(baseName)

	for _, c := range mockCocktails {
		// ベース名が一致するものを抽出
		if strings.ToLower(c.Base) == lowerBaseName {
			results = append(results, c)
		}
	}
	return results
}
