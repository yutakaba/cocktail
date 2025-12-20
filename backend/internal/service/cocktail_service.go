package service

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"

	"github.com/yutakaba/cocktail-app-backend/internal/models"
)

func GetCocktailsByBase(baseName string) ([]models.Cocktail, error) {
	
	query := strings.ReplaceAll(baseName, " ", "_")

	apiKey := os.Getenv("COCKTAIL_DB_API_KEY")
	if apiKey == "" {
		apiKey = "1"
	}

	apiURL := fmt.Sprintf("https://www.thecocktaildb.com/api/json/v1/%s/filter.php?i=%s", apiKey, query)

	resp, err := http.Get(apiURL)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch from CocktailDB: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("cocktailDB returned status code: %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read response body: %w", err)
	}

	var dbResp models.CocktailDBFilterResponse
	if err := json.Unmarshal(body, &dbResp); err != nil {
		if dbResp.Drinks == nil {
			return []models.Cocktail{}, nil
		}
		return nil, fmt.Errorf("failed to unmarshal CocktailDB response: %w", err)
	}

	return mapFilterDrinksToCocktails(dbResp.Drinks), nil
}

func mapFilterDrinksToCocktails(dbDrinks []models.CocktailDBFilterDrink) []models.Cocktail {
	var cocktails []models.Cocktail

	for _, dbd := range dbDrinks {
		id := 0
		fmt.Sscanf(dbd.IDDrink, "%d", &id)

		cocktail := models.Cocktail{
			ID:          id,
			Name:        dbd.StrDrink,
			Base:        "",
			Ingredients: []string{"詳細を見るにはIDでルックアップが必要です"},
			Method:      "",
			ABV:         0.0,
			ImageURL:    dbd.StrDrinkThumb,
		}
		cocktails = append(cocktails, cocktail)
	}
	return cocktails
}
