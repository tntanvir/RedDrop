from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from ..dependencies import get_db
from ..queries import user
from ..schemas.user import UserResponse

router = APIRouter(prefix="/filters", tags=["Filters"])


@router.get("/active", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_active_users(db: Session = Depends(get_db)):
    return user.get_active_users(db=db)


@router.get("/admin", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_admin_users(db: Session = Depends(get_db)):
    return user.get_admin_users(db=db)


@router.get("/donar", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_donar_users(db: Session = Depends(get_db)):
    return user.get_donar_users(db=db)


@router.get("/blood_group/{blood_group}", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_users_by_blood_group(blood_group: str, db: Session = Depends(get_db)):
    return user.get_user_by_blood_group(db=db, user_blood_group=blood_group)


@router.get("/location/{location}", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_users_by_blood_group(location: str, db: Session = Depends(get_db)):
    return user.get_user_by_location(db=db, user_location=location)
