from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from ..dependencies import get_db
from ..queries import user
from ..schemas.user import UserRequest, UserResponse

router = APIRouter(prefix="/users", tags=["Users"])


@router.get("/", response_model=list[UserResponse], status_code=status.HTTP_200_OK)
def get_all_user(db: Session = Depends(get_db)):
    return user.get_users(db=db)


@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def create_a_user(user_req: UserRequest, db: Session = Depends(get_db)):
    return user.create_user(db=db, user=user_req)


@router.get("/{id}", response_model=UserResponse, status_code=status.HTTP_200_OK)
def get_a_user_by_id(id: int, db: Session = Depends(get_db)):
    return user.get_user(db=db, user_id=id)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_a_user(id: int, db: Session = Depends(get_db)):
    user.delete_user(db=db, user_id=id)
    return


@router.put("/{id}", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def update_a_user(id: int, user_req: UserRequest, db: Session = Depends(get_db)):
    return user.update_user(db=db, user_id=id, user=user_req)
