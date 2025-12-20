package models

type Cocktail struct {
	ID          int      `json:"id"`
	Name        string   `json:"name"`
	Base        string   `json:"base"`
	Ingredients []string `json:"ingredients"`
	Method      string   `json:"method"`
	ABV         float64  `json:"abv"`
	ImageURL    string   `json:"imageUrl"`
}
