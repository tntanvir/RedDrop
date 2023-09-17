from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from ..models.feedback import Feedback
from ..schemas.feedback import FeedbackRequest


def create_feedback(db: Session, feedback: FeedbackRequest):
    new_feedback = Feedback(name=feedback.name, email=feedback.email,
                            message=feedback.message, photo_url=feedback.photo_url,
                            rated=feedback.rated, rated_value=feedback.rated_value)
    db.add(new_feedback)
    db.commit()
    db.refresh(new_feedback)
    return new_feedback


def get_feedbacks(db: Session):
    return db.query(Feedback).all()


def get_feedback(db: Session, feedback_id: int):
    feedback = db.query(Feedback).filter(Feedback.id == feedback_id).first()
    if feedback:
        return feedback
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"feedback with id `{feedback_id}` does not exist.")


def get_feedbacks_by_email(db: Session, feedback_email: str):
    feedbacks = db.query(Feedback).filter(
        Feedback.email == feedback_email).all()
    if feedbacks:
        return feedbacks
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"feedback with email `{feedback_email}` does not exist.")


def delete_feedback(db: Session, feedback_id: int):
    get_feedback(db=db, feedback_id=feedback_id)
    db.query(Feedback).filter(Feedback.id == feedback_id).delete()
    db.commit()
    return


def update_feedback(db: Session, feedback_id: int, feedback: FeedbackRequest):
    new_feedback = get_feedback(db=db, feedback_id=feedback_id)

    new_feedback.name = feedback.name
    new_feedback.email = feedback.email
    new_feedback.photo_url = feedback.photo_url
    new_feedback.message = feedback.message
    new_feedback.rated = feedback.rated
    new_feedback.rated_value = feedback.rated_value

    db.add(new_feedback)
    db.commit()
    db.refresh(new_feedback)
    return new_feedback
