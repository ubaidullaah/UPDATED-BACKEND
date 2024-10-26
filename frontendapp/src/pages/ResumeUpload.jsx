import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobId, setJobId] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle job description upload
  const handleJobDescriptionUpload = async () => {
    if (!jobTitle || !jobDescription) {
      setUploadStatus('Please provide both job title and description.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/add_job_description', {
        title: jobTitle,
        description_text: jobDescription,
      });
      setJobId(response.data.id);
      setUploadStatus(`Job Description uploaded successfully: ${response.data.title}`);
    } catch (error) {
      setUploadStatus(`Job Description upload failed: ${error.response?.data?.detail || error.message}`);
    }
  };

  // Handle resume upload
  const handleResumeUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file first.');
      return;
    }
    if (!jobId) {
      setUploadStatus('Please upload a job description first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/upload_resume?job_description_id=${jobId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus(`Resume uploaded successfully: ${response.data.name}`);
    } catch (error) {
      setUploadStatus(`Upload failed: ${error.response?.data?.detail || error.message}`);
    }
  };

  return (
    <div>
      <h2>Upload Job Description</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <textarea
        placeholder="Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button onClick={handleJobDescriptionUpload}>Upload Job Description</button>

      <h2>Upload Your Resume</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleResumeUpload}>Upload</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default ResumeUpload;
