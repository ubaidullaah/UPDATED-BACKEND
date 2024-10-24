import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import ResumeUpload from './pages/ResumeUpload'; // Importing the ResumeUpload component
import CandidatesList from './pages/CandidatesList'; // Import the new CandidatesList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/candidates" element={<CandidatesList />} /> {/* Add the CandidatesList route */}

        <Route path="/resume-upload" element={<ResumeUpload />} /> {/* Adding the ResumeUpload route */}
      </Routes>
    </Router>
  );
}

export default App;
