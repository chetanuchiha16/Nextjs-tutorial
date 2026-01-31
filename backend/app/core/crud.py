from app.core.database import Base
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession


class Crud[ModelType: Base, CreateSchemaType: BaseModel]:
    def __init__(self, model: type[ModelType]):
        self.model = model

    async def list(self, session: AsyncSession, limit: int) -> list[ModelType]:
        response = await session.execute(select(self.model).limit(limit))
        return response.scalars().all()

    async def get(self, id, session: AsyncSession) -> ModelType:
        response = await session.execute(select(self.model).where(id=id))
        return response.scalars().first()

    async def create(
        self, session: AsyncSession, object_in: CreateSchemaType
    ) -> ModelType:
        object = object_in.model_dump()
        obj = self.model(**object)
        session.add(obj)
        await session.commit()
        await session.refresh(obj)
        return obj

    async def delete(self, session: AsyncSession, id) -> ModelType | None:
        model = self.get(id=id)
        if not model:
            return None
        await session.delete(model)
        await session.commit()
        return model
