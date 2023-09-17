from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from ..dependencies import get_db
from ..queries import feedback
from ..schemas.feedback import FeedbackRequest, FeedbackResponse

router = APIRouter(prefix="/feedbacks", tags=["Feedbacks"])


@router.get("/", response_model=list[FeedbackResponse], status_code=status.HTTP_200_OK)
def get_all_feedback(db: Session = Depends(get_db)):
    return feedback.get_feedbacks(db=db)


@router.post("/", response_model=FeedbackResponse, status_code=status.HTTP_201_CREATED)
def create_a_feedback(feedback_req: FeedbackRequest, db: Session = Depends(get_db)):
    return feedback.create_feedback(db=db, feedback=feedback_req)


@router.get("/id/{id}", response_model=FeedbackResponse, status_code=status.HTTP_200_OK)
def get_a_feedback_by_id(id: int, db: Session = Depends(get_db)):
    return feedback.get_feedback(db=db, feedback_id=id)


@router.get("/email/{email}", response_model=list[FeedbackResponse], status_code=status.HTTP_200_OK)
def get_feedbacks_by_email(email: str, db: Session = Depends(get_db)):
    return feedback.get_feedbacks_by_email(db=db, feedback_email=email)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_a_feedback(id: int, db: Session = Depends(get_db)):
    feedback.delete_feedback(db=db, feedback_id=id)
    return


@router.put("/{id}", response_model=FeedbackResponse, status_code=status.HTTP_201_CREATED)
def update_a_feedback(id: int, feedback_req: FeedbackRequest, db: Session = Depends(get_db)):
    return feedback.update_feedback(db=db, feedback_id=id, feedback=feedback_req)
