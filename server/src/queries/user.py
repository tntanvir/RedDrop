from sqlalchemy.orm import Session

from ..models.user import User
from ..schemas.user import UserRequest


def create_user(db: Session, user: UserRequest):
    new_user = User(name=user.name, password=user.password,
                    phone=user.phone, email=user.email, blood_group=user.blood_group)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def get_users(db: Session):
    return db.query(User).all()


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def delete_user(db: Session, user_id: int):
    db.query(User).filter(User.id == user_id).delete()
    db.commit()
    return


def update_user(db: Session, user_id: int, user: UserRequest):
    new_user = get_user(db=db, user_id=user_id)
    new_user.name = user.name
    new_user.email = user.email
    new_user.phone = user.phone
    new_user.password = user.password
    new_user.blood_group = user.blood_group
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def get_user_by_blood_group(db: Session, user_blood_group: str):
    return db.query(User).filter(User.blood_group == user_blood_group)
