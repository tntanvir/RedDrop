# RedDrop Backend

Backend for RedDrop.

## Run

This part of the project uses Python, install it if don't already have it. We recommend you use a virtual environment to run this project which can be initialize with `python -m venv env` and activate it by running `source ./env/bin/activate.sh` (for windows, run: `source ./env/bin/activate.bat`). Then install all the dependency via `pip install -r requirements.txt` and run the server with `uvicorn src.main:app --reload`

**Note:** You can use any identifier as environment name instead of env or avoid the whole process although it's not recommended.

## Docs

Science this service is built with FastAPI, it contains docs which you can access from `SERVER_PATH/docs` (default is: `http://localhost:8000/docs`)
