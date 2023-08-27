start:
	npm --prefix ./website start

deploy_github_pages:
	npm --prefix ./website run deploy

local_build:
	docker compose -f docker-compose.yml up -d --build
	open http://localhost:3000/

local_destroy:
	docker compose down