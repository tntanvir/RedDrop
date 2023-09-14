from pydantic import BaseModel


class UserRequest(BaseModel):
    name: str
    email: str
    phone: str

    blood_group: str

    location: str
    location_bn: str
    lat: float
    lon: float

    is_donar: bool = False


class UserResponse(UserRequest):
    id: int

    class Config:
        orm_mode = True
        from_attributes = True
