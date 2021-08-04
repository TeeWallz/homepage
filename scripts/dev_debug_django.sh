#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd "${SCRIPT_DIR}/../django"

set -o allexport; source ../.env.dev; set +o allexport
source venv/bin/activate

./django_project/manage.py runserver $REACT_APP_DJANGO_PORT