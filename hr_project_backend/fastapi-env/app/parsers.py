from fastapi import UploadFile  # Import UploadFile
from docx import Document
from io import BytesIO
import textract

def parse_pdf(file: UploadFile):
    # Example: Implement a method to parse PDF files (using PyPDF2, pdfminer, or similar library)
    # Placeholder code; replace with actual parsing logic
    return "Parsed PDF text content here"

def parse_doc(file: UploadFile):
    # Check if the file is a DOCX file
    if file.content_type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        return parse_docx(file)
    elif file.content_type == "application/msword":
        return parse_doc_file(file)
    else:
        raise ValueError("Unsupported file format for parsing.")

def parse_docx(file: UploadFile):
    # Read the DOCX file content using BytesIO
    file_content = file.file.read()  # Read the file content into memory
    document = Document(BytesIO(file_content))  # Create a Document object using BytesIO
    doc_text = ""
    for paragraph in document.paragraphs:
        doc_text += paragraph.text + "\n"
    return doc_text

def parse_doc_file(file: UploadFile):
    # Use textract to extract text from DOC files
    text = textract.process(file.file)
    return text.decode("utf-8")
