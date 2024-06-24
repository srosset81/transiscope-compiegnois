BASE=docker-compose -f docker-compose.yaml
PROD=$(BASE) -f docker-compose.prod.yaml --env-file .env.prod
LOCAL=$(BASE) -f docker-compose.local.yaml --env-file .env.local
DEV=$(LOCAL) -f docker-compose.local.dev.yaml

## Database (Jena Fuseki)
start-db:
	$(LOCAL) up -d fuseki

start-db-prod:
	$(PROD) up -d fuseki

stop-db:
	$(LOCAL) stop fuseki

## Middleware
build-middleware:
	$(LOCAL) build middleware

start-middleware:
	$(LOCAL) up -d --force-recreate middleware

start-middleware-dev:
	$(DEV) up -d --force-recreate middleware

start-middleware-prod:
	$(PROD) up -d --force-recreate middleware

stop-middleware:
	$(LOCAL) stop middleware

publish-middleware:
	@echo "Which version?" && \
	read version && \
	docker tag transiscope-nantes/middleware registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/middleware && \
	docker tag transiscope-nantes/middleware registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/middleware:$$version && \
	docker push registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/middleware && \
	docker push registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/middleware:$$version

## Frontend
build-frontend:
	$(LOCAL) build frontend

build-frontend-dev:
	$(DEV) build frontend

start-frontend:
	$(LOCAL) up -d --force-recreate frontend

start-frontend-dev:
	$(DEV) up -d --force-recreate frontend

start-frontend-prod:
	$(PROD) up -d --force-recreate frontend

stop-frontend:
	$(LOCAL) stop frontend

publish-frontend:
	@echo "Which version?" && \
	read version && \
	docker tag transiscope-nantes/frontend registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/frontend && \
	docker tag transiscope-nantes/frontend registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/frontend:$$version && \
	docker push registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/frontend && \
	docker push registry.gitlab.com/transiscope-nantes/deploy-archipelago-nantes/frontend:$$version

## Global start/stop
start-local:
	$(LOCAL) up -d

start-dev:
	$(DEV) up -d --force-recreate

start-prod:
	$(PROD) up -d

stop:
	$(LOCAL) down
	$(DEV) down

build: build-frontend build-middleware

## Logs
logs:
	$(LOCAL) logs -f

## Other
update-prod:
	make stop-middleware stop-frontend start-middleware-prod start-frontend-prod

set-compact-cron:
	(crontab -l 2>/dev/null; echo "0 4 * * * ./compact-cron.sh >> /tmp/cronlog.txt") | crontab -

compact-prod:
	make stop
	$(PROD) up fuseki_compact
	make start-prod

prune-data:
	sudo rm -rf ./data

## Development

dev-init:
	. ./dev.sh && init

dev-update:
	. ./dev.sh && update

dev-sync:
	. ./dev.sh && sync

dev-start-db:
	cd dev && docker-compose up -d fuseki

dev-stop-db:
	cd dev && docker-compose stop

dev-start-frontend:
	. ./.env.local && . ./env.sh dev/frontend/public
	cd dev/frontend && yarn dev

dev-start-middleware:
	cd dev/middleware && yarn dev
