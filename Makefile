.DEFAULT_GOAL := help
.PHONY: .env setup build install up down clean 

.ONESHELL:
.SHELLFLAGS := -eu -c  
SHELL := bash

app_port = 8080
# TODO:
# db_port = 5444

compose_file = ops/compose.yaml
compose_file_custom = ops/compose.custom.yaml
compose_project_name = jvfr

app_target = development
app_image = jvfr

export COMPOSE_PATH_SEPARATOR = :
export COMPOSE_FILE ?= $(compose_file):$(compose_file_custom)
export COMPOSE_PROJECT_NAME ?= $(compose_project_name)
export APP_GROUP_ID ?= $(shell echo $${SUDO_GID:-$$(id -g)})
export APP_USER_ID ?= $(shell echo $${SUDO_UID:-$$(id -u)})

$(compose_file_custom):
	touch "$(compose_file_custom)"

.env: $(compose_file_custom)
	-@cp -i ./src/.env.example ./src/.env

	temp_file=$$(mktemp)

	cat <<EOF > $$temp_file
		# ---------------------------------------------------
		# All the environment variables below are build-related.
		# Application-specific ones are placed under src/ folder
		# ---------------------------------------------------

		APP_PORT="$(app_port)"
		DB_PORT="$(db_port)"
		APP_IMAGE="$(app_image)"
		APP_TARGET="$(app_target)"

		# ---------------------------------------------------
		# Env vars below are for sake of explicity.
		# These values are derived from defaults in Makefile and shouldn't be adjusted here.
		# ---------------------------------------------------

		COMPOSE_FILE="$(compose_file):$(compose_file_custom)"
		COMPOSE_PROJECT_NAME="$(compose_project_name)"
		APP_GROUP_ID="$(APP_GROUP_ID)"
		APP_USER_ID="$(APP_USER_ID)"
		HOST_IP="$(HOST_IP)"

		EOF
		cp -i $$temp_file .env
		rm -f $$temp_file

setup: build install-deps up 

build: .env 
	docker compose build

install-deps:
	docker compose run --no-deps --rm app npm ci 

up:
	 docker compose up -d --remove-orphans --wait --wait-timeout 30

down:
	docker compose down --remove-orphans 
	
clean: down
	rm -rf .env src/.npm src/node_modules src/coverage src/debug.json "$(compose_file_custom)"
