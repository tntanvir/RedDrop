from sqlalchemy import Column, Boolean, Integer, String, Float

from ..database import Base


class Feedback(Base):
    __tablename__ = "feedbacks"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    email = Column(String)
    photo_url = Column(String)

    message = Column(String)

    rated = Column(String)
    rated_value = Column(Integer)
