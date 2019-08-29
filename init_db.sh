#!/bin/sh

docker-compose up -d --build

docker-compose exec users python manage.py test
docker-compose exec users python manage.py recreate_db
docker-compose exec users python manage.py seed_db
