from pydantic import BaseModel


class FeedbackRequest(BaseModel):
    name: str
    email: str

    photo_url: str
    message: str

    rated: str
    rated_value: int


class FeedbackResponse(FeedbackRequest):
    id: int

    class Config:
        orm_mode = True
        from_attributes = True
