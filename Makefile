.PHONY: dev dev-front dev-back

dev:
	make -j 2 dev-front dev-back

dev-front:
	cd ./front && npm run dev

dev-back:
	cd ./backend && go run cmd/server/main.go
