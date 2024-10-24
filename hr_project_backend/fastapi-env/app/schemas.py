from pydantic import BaseModel

class CandidateCreate(BaseModel):
    name: str
    resume_text: str

class CandidateOut(CandidateCreate):
    id: int
    score: int

    class Config:
        orm_mode = True
