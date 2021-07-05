docker network create nginx-proxy

docker-compose build
docker-compose up -d
docker logs --tail 50 --follow --timestamps monty_project_web_1