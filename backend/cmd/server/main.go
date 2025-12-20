package main

import (
	"github.com/yutakaba/cocktail-app-backend/routes"
    "os"
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
    port := os.Getenv("PORT")
    if port == ""{
        port = "8080"
    }

    addr := ":" + port

	srv := &http.Server{
        // SetupCORSHandler()がCORS設定済みのルーターを返します
        Handler:      routes.SetupCORSHandler(),
        Addr:         addr,
        WriteTimeout: 15 * time.Second,
        ReadTimeout:  15 * time.Second,
    }

    fmt.Printf("🎉 Go API Server started on http://localhost%s\n", addr)

    log.Fatal(srv.ListenAndServe())
}	
