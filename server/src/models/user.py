from sqlalchemy import Column, Boolean, Integer, String

from ..database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)
    phone = Column(String)
    email = Column(String)
    password = Column(String)

    blood_group = Column(String)
    location = Column(String)
    is_donar = Column(Boolean)

    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
