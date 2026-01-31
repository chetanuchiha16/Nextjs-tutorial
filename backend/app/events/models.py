import re
from datetime import datetime

from app.core.database import Base
from sqlalchemy import ARRAY, DateTime, Enum, String, Text, event
from sqlalchemy.orm import Mapped, mapped_column


class Event(Base):
    __tablename__ = "events"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100), nullable=False)
    slug: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False, index=True
    )
    description: Mapped[str] = mapped_column(
        Text, nullable=False
    )  # Use Text for longer content
    overview: Mapped[str] = mapped_column(String(500), nullable=False)
    image: Mapped[str] = mapped_column(String(255), nullable=False)
    venue: Mapped[str] = mapped_column(String(255), nullable=False)
    location: Mapped[str] = mapped_column(String(255), nullable=False)

    date: Mapped[str] = mapped_column(String(50), nullable=False)
    time: Mapped[str] = mapped_column(String(50), nullable=False)

    # Enum for mode
    mode: Mapped[str] = mapped_column(
        Enum("online", "offline", "hybrid", name="event_mode"), nullable=False
    )

    audience: Mapped[str] = mapped_column(String(255), nullable=False)

    agenda: Mapped[list[str]] = mapped_column(ARRAY(String), nullable=False)
    tags: Mapped[list[str]] = mapped_column(ARRAY(String), nullable=False)

    organizer: Mapped[str] = mapped_column(String(255), nullable=False)

    # Timestamps
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    updated_at: Mapped[datetime] = mapped_column(
        DateTime, default=datetime.utcnow, onupdate=datetime.utcnow
    )


# --- Logic for Slug Generation (The "Pre-save" equivalent) ---


def generate_slug(target, value, oldvalue, initiator):
    if value and (value != oldvalue):
        # Simple slugify logic: lowercase and replace non-alphanumerics with hyphens
        target.slug = re.sub(r"[^\w]+", "-", value.lower()).strip("-")


# Listen for changes to the title to update the slug
event.listen(Event.title, "set", generate_slug, retval=False)
