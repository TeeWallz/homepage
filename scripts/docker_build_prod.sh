#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "${SCRIPT_DIR}/../"

docker-compose down -v
docker-comecvho pose -f docker-compose.prod.yml up --force-recreate -d --build