import React from 'react';
import Navbar from '../components/Navbar'; // Reuse the Navbar component
import ubaid from '../assets/ubaid.jpg'; // 

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow bg-gray-100 p-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold text-purple-800">About Us</h1>
            <p className="text-lg mt-4 text-gray-700">Pioneering the future of HR through automation.</p>
          </div>
          
          {/* Services Section */}
          <div className="my-10">
            <h2 className="text-3xl text-purple-700 mb-4">Our Services</h2>
            <p className="text-gray-600">
              We provide innovative solutions to automate the hiring process. Our product helps to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>Shortlist candidates efficiently</li>
              <li>Schedule interviews seamlessly</li>
              <li>Filter out the best candidates suited for the positions</li>
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="my-10">
            <h2 className="text-3xl text-purple-700 mb-4">Benefits</h2>
            <p className="text-gray-600">
              By using our automated system, companies can save significant time and resources in the hiring process, leading to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>Faster hiring cycles</li>
              <li>Improved candidate matches</li>
              <li>Cost-effective recruitment processes</li>
            </ul>
          </div>

         {/* Team Section */}
         <div className="my-10">
            <h2 className="text-3xl text-purple-700 mb-4">Meet Our Team</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Founder Profile Card */}
              <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mt-4 rounded-full" src={ubaid} alt="Ubaid"/>
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg font-medium">Ubaid</p>
                  <p className="text-sm text-gray-600">Founder - Data Scientist</p>
                  <p className="text-sm text-gray-600 mt-1">4 years experience</p>
                </div>
              </div>

              {/* Co-founder Profile Card */}
              <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mt-4 rounded-full" src="/path/to/aqeel-photo.jpg" alt="Aqeel"/>
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg font-medium">Aqeel</p>
                  <p className="text-sm text-gray-600">Co-founder - Data Scientist</p>
                  <p className="text-sm text-gray-600 mt-1">4 years experience</p>
                </div>
              </div>

              {/* CEO Profile Card */}
              <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md">
                <div className="flex justify-center">
                  <img className="w-32 h-32 mt-4 rounded-full" src="/path/to/talha-photo.jpg" alt="Talha"/>
                </div>
                <div className="text-center mt-4">
                  <p className="text-lg font-medium">Talha</p>
                  <p className="text-sm text-gray-600">CEO - Web Developer</p>
                  <p className="text-sm text-gray-600 mt-1">4 years experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;