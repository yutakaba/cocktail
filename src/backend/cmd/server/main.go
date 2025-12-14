package main

import (
	"github.com/yutakaba/cocktail-app-backend/routes"
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {

	srv := &http.Server{
        // SetupCORSHandler()がCORS設定済みのルーターを返します
        Handler:      routes.SetupCORSHandler(),
        Addr:         ":8080",
        WriteTimeout: 15 * time.Second,
        ReadTimeout:  15 * time.Second,
    }

    fmt.Println("🎉 Go API Server started on http://localhost:8080")

    log.Fatal(srv.ListenAndServe())
}	
