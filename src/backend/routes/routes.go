package routes

import (
	"github.com/yutakaba/cocktail-app-backend/internal/handlers"

	"github.com/gorilla/mux"
)

// SetupRouter はAPIのルーティングを設定し、ルーターオブジェクトを返します。
func SetupRouter() *mux.Router {
	router := mux.NewRouter()

	// GET /api/v1/cocktails/{baseName}
	// 例: /api/v1/cocktails/gin
	// 変数名 "baseName" はハンドラーで参照されます。
	router.HandleFunc("/api/v1/cocktails/{baseName}", handlers.GetCocktailsByBase).Methods("GET")

	return router
}
