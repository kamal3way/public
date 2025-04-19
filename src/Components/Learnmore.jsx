import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import b3 from "../images/b3.jpg";

const LearnMore = () => {
  const navigate = useNavigate();
  const [isDiscoverMode, setIsDiscoverMode] = useState(true);

  const handleButtonClick = () => {
    if (isDiscoverMode) {
      navigate("/about"); // Navigate to the destinations page
      setIsDiscoverMode(false); // Switch to "Learn More" mode
    } else {
      navigate("/learn-more"); // Navigate back to Learn More page
      setIsDiscoverMode(true); // Switch back to "Discover Now" mode
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 py-16 px-8 md:px-16 lg:px-32  pt-13">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-16 space-y-10 md:space-y-0">
        {/* Left Section: Image */}
        <div className="flex-1">
          <div className="relative group">
            <img
              src={b3}
              alt="Discover Destinations"
              className="rounded-lg shadow-xl w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-2xl font-bold tracking-wide">
                Discover the World
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="flex-1 text-gray-800 md:pl-8 font-serif">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-700 leading-tight">
            {isDiscoverMode
              ? "Explore Our Vision"
              : "Learn More About Us"}
          </h1>
          <div className="text-lg leading-relaxed space-y-4 text-gray-800">
            {isDiscoverMode ? (
              <>
                <p>
                  Uncover the beauty of the world, one destination at a time.
                  From serene beaches to bustling cities, our curated travel
                  experiences bring you closer to the heart of every location.
                </p>
                <p>
                  Imagine sipping cocktails on a sunlit beach, trekking through
                  lush rainforests, or wandering cobblestone streets filled with
                  history. We offer experiences that are not just trips, but
                  journeys to remember for a lifetime.
                </p>
                <p>
                  Each destination is handpicked to offer the best in culture,
                  cuisine, and adventure. Whether you’re traveling solo, as a
                  couple, or with family, there’s something magical waiting for
                  you.
                </p>
              </>
            ) : (
              <>
                <p>
                  Learn more about our vision, passion, and commitment to
                  creating extraordinary travel experiences. We believe in the
                  transformative power of exploration and aim to inspire others
                  to embrace the beauty of our diverse world.
                </p>
                <p>
                  Our team is dedicated to connecting people and places,
                  building bridges across cultures, and leaving a positive
                  impact wherever we go. With each journey, we strive to create
                  a meaningful experience that stays with you long after your
                  return.
                </p>
                <p>
                  Join us as we continue to grow, innovate, and inspire
                  wanderlust. Let’s explore the world together and make
                  unforgettable memories, one destination at a time.
                </p>
              </>
            )}
          </div>
          <button
            onClick={handleButtonClick}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium rounded-lg shadow hover:from-purple-500 hover:to-indigo-600 transition-all mt-6"
          >
            {isDiscoverMode ? "Discover Now" : "Learn More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
