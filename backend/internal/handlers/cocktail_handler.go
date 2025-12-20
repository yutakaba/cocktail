package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"

    "github.com/yutakaba/cocktail-app-backend/internal/service" 
)

// GetCocktailsByBase は指定されたベースリカーのカクテル一覧を返します。
func GetCocktailsByBase(w http.ResponseWriter, r *http.Request) {
    vars := mux.Vars(r)
    baseName := vars["baseName"]

    // service層の関数を呼び出し、エラーをチェック
    cocktails, err := service.GetCocktailsByBase(baseName)
    if err != nil {
        // エラーが発生した場合、サーバーエラー(500)を返す
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    // レスポンスの設定
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(cocktails)
}
