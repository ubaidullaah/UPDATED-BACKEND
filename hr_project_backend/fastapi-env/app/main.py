from fastapi import FastAPI, Depends, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .database import engine, Base, get_db
from .models import Candidate
from .parsers import parse_pdf, parse_doc
from .schemas import CandidateCreate, CandidateOut

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS Middleware to allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL (adjust if necessary)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (POST, GET, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.post("/upload_resume", response_model=CandidateOut)
def upload_resume(file: UploadFile = File(...), db: Session = Depends(get_db)):
    allowed_content_types = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    
    if file.content_type not in allowed_content_types:
        raise HTTPException(status_code=400, detail="Only PDF, DOC, and DOCX files are supported.")

    # Parse the resume based on file type
    if file.content_type == "application/pdf":
        resume_text = parse_pdf(file)
    elif file.content_type in ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]:
        resume_text = parse_doc(file)
    else:
        raise HTTPException(status_code=400, detail="Unsupported file format")

    candidate = Candidate(name=file.filename, resume_text=resume_text)
    
    db.add(candidate)
    db.commit()
    db.refresh(candidate)
    return candidate

# Route to fetch all candidates with extracted text
@app.get("/candidates", response_model=list[CandidateOut])
def get_all_candidates(db: Session = Depends(get_db)):
    candidates = db.query(Candidate).all()
    return candidates
