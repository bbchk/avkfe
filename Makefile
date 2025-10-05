# =========================================
#
# This Makefile includes common operational targets and configurations
# from the shared parent file: ops/common/lvops/Makefile

-include ./ops/common/lvops/Makefile

# All the targets and configurations specified here
# are specific to this application

# == Variables below ======================

compose_file = ops/compose.yaml
compose_file_custom = ops/compose.custom.yaml
compose_project_name = lvfe

app_port = 3000
app_target = development
app_image = lvfe

# == Primary targets below ======================

clean: down
	rm -rf .env src/node_module src/.env "$(compose_file_custom)"

# == Auxiliary targets below ======================

.env: $(compose_file_custom)
	cp -i src/.env.example src/.env
	cp -i <(cat <<<'
		APP_PORT="$(app_port)"
		APP_IMAGE="$(app_image)"
		APP_TARGET="$(app_target)"
		COMPOSE_FILE="$(compose_file):$(compose_file_custom)"
		COMPOSE_PROJECT_NAME="$(compose_project_name)"
		APP_GROUP_ID="$(APP_GROUP_ID)"
		APP_USER_ID="$(APP_USER_ID)"'
	) .env

install-deps:
	docker compose run --no-deps --rm app -- pnpm install --frozen-lockfile

help: help-primary help-auxiliary help-qol
