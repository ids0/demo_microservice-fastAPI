# microservice_fastAPI

cd inventory
uvicorn main:app --reload --port 8000

python consumer.py

cd payment
uvicorn main:app --reload --port 8001

python consumer.py
