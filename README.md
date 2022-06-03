# microservice_fastAPI

cd inventory
uvicorn main:app --reload

python consumer.py

cd payment
uvicorn main:app --reload

python consumer.py
