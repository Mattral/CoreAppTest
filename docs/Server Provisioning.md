# Server Provisioning

EC2 instances are provisioned for the app

1. Install docker and give necessary privileges
2. Install or update make `sudo apt install make`
3. Add SSH private key to a file path (preferrably ~/.ssh/)
4. Update swapfile
5. Make instance a docker swarm (`docker swarm init`)
6. Create external docker network. In this case `loe_network`.
   `docker network create -d overlay --attachable [name of network]`
7. Generate SSL Certificates (using certbot)
8. Copy the `fullchain.pem` and `privkey.pem` files from `archive` to `app/docker/certificates`

### Notes

- In (3) above, the project requires writing nginx conf files for custom domains. I initially
  want to write directly on the EC2 instance but I am considering using an S3 bucket as a
  docker volume

- In (8) above, I am researching on a better solution where the SSL certificates can be managed
  automatically especially during the renewal process
