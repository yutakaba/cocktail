package main

import (
	"github.com/yutakaba/cocktail-app-backend/routes"
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	// 1. ルーターの設定
	router := routes.SetupRouter()

	// 2. HTTPサーバーの設定
	srv := &http.Server{
		Handler:      router,
		Addr:         ":8080",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	fmt.Println("🎉 Go API Server started on http://localhost:8080")

	// 3. サーバーの起動
	log.Fatal(srv.ListenAndServe())
}
