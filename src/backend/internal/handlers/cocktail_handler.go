package handlers

import (
	"github.com/yutakaba/cocktail-app-backend/internal/service"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux" // ルーターから変数を受け取るために使用
)

// GetCocktailsByBase は指定されたベースリカーのカクテル一覧をJSONで返します。
func GetCocktailsByBase(w http.ResponseWriter, r *http.Request) {
	// Gorilla Muxを使用してURLパスの変数 "baseName" (routes.goで定義) を取得
	vars := mux.Vars(r)
	baseName := vars["baseName"]

	// サービス層からモックデータを取得
	cocktails := service.GetCocktailsByBase(baseName)

	// CORS (Next.jsからのアクセスを許可するために必要)
	// 開発中は全てのリクエストを許可します
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")

	// データをJSONにエンコードしてレスポンスとして書き出す
	json.NewEncoder(w).Encode(cocktails)
}
