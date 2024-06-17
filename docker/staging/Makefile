# Stop all running container
down:
	docker stack rm loe_stack

# Pull new images
pull:
	cat ./docker_password | docker login --username yinkaenoch --password-stdin
	docker compose pull
	rm -rf docker_password

# Start containers
up:
	docker stack deploy -c ./docker-compose.yml loe_stack 

prune:
	echo 'y' | docker image prune -a

# Network name must be the same with the one specified in docker-compose.yml
create_overlay_network:
	docker network create -d overlay --attachable loe_network 

delete_overlay_network:
	docker network rm loe_network