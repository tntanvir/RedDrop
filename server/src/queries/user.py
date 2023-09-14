from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from ..models.user import User
from ..schemas.user import UserRequest


def create_user(db: Session, user: UserRequest):
    new_user = User(name=user.name, phone=user.phone, email=user.email,
                    blood_group=user.blood_group,
                    location=user.location, location_bn=user.location_bn, lat=user.lat, lon=user.lon,
                    is_donar=user.is_donar)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def get_users(db: Session):
    return db.query(User).all()


def get_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if user:
        return user
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"user with id `{user_id}` does not exist.")


def get_users_by_email(db: Session, user_email: str):
    users = db.query(User).filter(User.email == user_email).all()
    if users:
        return users
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"user with email `{user_email}` does not exist.")


def delete_user(db: Session, user_id: int):
    get_user(db=db, user_id=user_id)
    db.query(User).filter(User.id == user_id).delete()
    db.commit()
    return


def update_user(db: Session, user_id: int, user: UserRequest):
    new_user = get_user(db=db, user_id=user_id)

    new_user.name = user.name
    new_user.phone = user.phone
    new_user.email = user.email
    new_user.blood_group = user.blood_group
    new_user.location = user.location
    new_user.location_bn = user.location_bn
    new_user.lat = user.lat
    new_user.lon = user.lon
    new_user.is_donar = user.is_donar

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def get_receiver_users(db: Session):
    return db.query(User).filter(User.is_donar == False).all()


def get_donar_users(db: Session):
    return db.query(User).filter(User.is_donar == True).all()


def get_user_by_location(db: Session, user_location: str):
    return db.query(User).filter(User.location == user_location).all()


def get_user_by_blood_group(db: Session, user_blood_group: str):
    return db.query(User).filter(User.blood_group == user_blood_group).all()


def get_user_by_location_and_blood_group(db: Session, user_location: str, user_blood_group: str):
    return db.query(User).filter(User.location == user_location).filter(User.blood_group == user_blood_group).all()
