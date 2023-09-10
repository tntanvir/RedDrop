from pydantic import BaseModel


class UserRequest(BaseModel):
    name: str
    email: str
    phone: str
    password: str

    blood_group: str
    location: str

    is_donar: bool = False


class UserResponse(UserRequest):
    id: int

    is_active: bool
    is_admin: bool

    class Config:
        orm_mode = True
        from_attributes = True
