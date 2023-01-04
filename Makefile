.PHONEY: createdb dropdb createmg up down help
.DEFAULT_GOAL := help

DB_NAME := github-test-ci

createdb: ## github-test-ciのデータベースを作成する
	docker exec -it postgres12 createdb --username=root --owner=root ${DB_NAME}

dropdb: ## github-test-ciのデータベースを削除する
	docker exec -it postgres12 dropdb ${DB_NAME}

createmg: ## migration fileを作成する
	npx node-pg-migrate create create-users --migration-file-language=sql

up: ## 初期テーブルのmigrate, CREATE TABLEを作成する
	DATABASE_URL=postgres://root:secret@localhost:5432/${DB_NAME} npm run migrate up

down: ## テーブルを削除する(ロールバックする)
	DATABASE_URL=postgres://root:secret@localhost:5432/${DB_NAME} npm run migrate down

test: ## テストの実行
	npm test

help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'