#!/bin/sh
docker-compose -f docker-compose-prod.yml up -d --build

docker-compose exec users sh -c "while ! nc -z users-db 5432; do sleep 1; done; python manage.py test"
docker-compose exec users python manage.py recreate_db
docker-compose exec users python manage.py seed_db