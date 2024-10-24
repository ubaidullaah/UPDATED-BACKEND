import React from 'react';
import backgroundImage from '../assets/background.jpg'; 
import logo from '../assets/logo.jpg'; 
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here, if necessary
    navigate('/home'); // Redirect to Home page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 fixed top-0 left-0 w-full z-50" style={{ backgroundColor: '#6A0DAD' }}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Company Logo" className="h-8 w-8" />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 text-white" style={{ fontSize: 'calc(1.125rem + 2px)', fontFamily: 'Poppins, sans-serif' }}>
            <Link to="/home" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="flex flex-1 pt-16 relative">
        {/* Full-screen Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />

        {/* Left Section with Login Form */}
        <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center min-h-screen" style={{ marginLeft: '-48px' }}>
          <div className="bg-[#F0F0F5] p-8 shadow-lg rounded-lg max-w-sm w-full">
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#6A0DAD', fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>Log in</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                  Your email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.5' }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '16px' }}>
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="*********"
                  style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px', lineHeight: '1.5' }}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <a
                  className="text-sm text-[#6A0DAD] hover:text-purple-800"
                  href="#"
                  style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}
                >
                  Forgot your password? Click here
                </a>
              </div>
              <div className="mb-6">
                <button
                  className="bg-[#FFD700] hover:bg-[#FFB300] text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                  style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}
                >
                  LOGIN
                </button>
              </div>
              <div className="text-center">
                <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}>Don’t have an account? </span>
                <Link to="/signup" className="text-[#6A0DAD] hover:text-purple-800 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Sign up
                </Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
