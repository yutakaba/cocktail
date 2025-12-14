package routes

import (
	"net/http"

	"github.com/yutakaba/cocktail-app-backend/internal/handlers"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

// SetupRouter はAPIのルーティングを設定し、ルーターオブジェクトを返します。
func SetupRouter() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/api/v1/cocktails/{baseName}", handlers.GetCocktailsByBase).Methods("GET")

	return router
}

func SetupCORSHandler() http.Handler { 
    router := SetupRouter() 

    c := cors.New(cors.Options{
        AllowedOrigins:   []string{"http://localhost:3000"},
        AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
        AllowedHeaders:   []string{"Content-Type", "Authorization"},
        AllowCredentials: true,
    })

    return c.Handler(router)
}
