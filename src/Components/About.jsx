import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook for navigation
import b1 from "../images/b1.jpg";

const About = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleLearnMoreClick = () => {
    navigate("/learn-more"); // Navigate to the Learn More page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 py-12 px-6 md:px-12 lg:px-24 pt-24">
      {/* ↑ Added pt-24 to create space below navbar */}
      
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
        {/* Left Section: Image */}
        <div className="flex-1">
          <div className="relative group">
            <img
              src={b1}
              alt="Discover Destinations"
              className="rounded-lg shadow-xl w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-2xl font-bold tracking-wide">
                Discover Your life
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 text-gray-800 md:pl-8 font-serif">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-700 leading-tight">
            Discover Our Story
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-900">
            Welcome to our corner of inspiration and creativity! We’ve embarked
            on a journey to craft something meaningful, blending passion,
            vision, and connection into every aspect of what we do. Here, you’ll
            find a space that celebrates creativity, exploration, and community.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-900">
            With an unwavering commitment to innovation and collaboration, we
            aim to empower and inspire individuals to dream big and achieve
            more. Let’s build something extraordinary, together.
          </p>
          <button
            onClick={handleLearnMoreClick}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium rounded-lg shadow hover:from-purple-500 hover:to-indigo-600 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
