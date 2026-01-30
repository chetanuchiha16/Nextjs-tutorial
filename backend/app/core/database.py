from collections.abc import AsyncGenerator

from backend.app.core.config import settings
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


async_engine = create_async_engine(settings.DATABASE_URI)
sessionmaker = async_sessionmaker(bind=async_engine, expire_on_commit=True)


async def create_db_and_tables():
    async with async_engine.begin() as conn:
        conn.run_sync(Base.metadata.create_all)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with sessionmaker() as session:
        yield session
