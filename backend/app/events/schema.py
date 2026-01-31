from datetime import date

from pydantic import BaseModel, ConfigDict


class BaseEventSchema(BaseModel):
    title: str
    slug: str
    description: str
    overview: str
    image: str
    venue: str
    location: str
    date: str
    time: str
    mode: str
    audience: str
    agenda: list[str]
    organizer: str
    tags: list[str]


class CreateEventSchem(BaseEventSchema):
    pass


class EventSchema(BaseEventSchema):
    createdAt: date
    updatedAt: date

    model_config = ConfigDict(from_attributes=True)
