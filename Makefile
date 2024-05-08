restart: stop-dev build-dev run-dev

.PHONY: build-dev
build-dev: ## Build the development docker image.
	docker compose -f docker-compose/dev/compose.yaml build

.PHONY: run-dev
run-dev: ## Start the development docker container.
	docker compose -f docker-compose/dev/compose.yaml up -d

.PHONY: stop-dev
stop-dev: ## Stop the development docker container.
	docker compose -f docker-compose/dev/compose.yaml down

.PHONY: build-prod
build-prod: ## Build the production docker image.
	docker compose -f docker-compose/prod/compose.yaml build

.PHONY: run-prod
run-prod: ## Start the production docker container.
	docker compose -f docker-compose/prod/compose.yaml up -d

.PHONY: stop-prod
stop-prod: ## Stop the production docker container.
	docker compose -f docker-compose/prod/compose.yaml down
