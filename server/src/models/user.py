from sqlalchemy import Column, Boolean, Integer, String, Float

from ..database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    phone = Column(String)
    email = Column(String)

    blood_group = Column(String)

    location = Column(String)
    location_bn = Column(String)
    lat = Column(Float)
    lon = Column(Float)

    is_donar = Column(Boolean)
