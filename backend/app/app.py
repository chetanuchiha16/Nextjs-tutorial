from contextlib import asynccontextmanager

from app.core.database import create_db_and_tables
from fastapi import FastAPI


@asynccontextmanager
async def lifespan(app: FastAPI):
    await create_db_and_tables()
    yield


app = FastAPI(lifespan=lifespan)


@app.get("/health")
def health():
    return {"message": "app is running"}
