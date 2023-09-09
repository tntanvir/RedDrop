from pydantic import BaseModel


class UserRequest(BaseModel):
    name: str
    email: str
    phone: str
    password: str
    blood_group: str


class UserResponse(UserRequest):
    id: int
    is_active: bool
    is_admin: bool

    class Config:
        from_attributes = True
