# Stop all running container
down:
	docker stack rm loe_stack

# Pull new images
pull:
	cat ~/app/docker/docker_password | docker login --username minhtetmyet --password-stdin
	docker compose pull
	rm -rf ~/app/docker/docker_password

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
