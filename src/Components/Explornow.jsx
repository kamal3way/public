import React, { useState } from "react";
import { motion } from "framer-motion";

const ExploreNow = () => {
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";
  const apiKey = "9c425d4db51941a6afce4232551d4632"; 

  const fetchPlaces = async () => {
    setLoading(true);
    setError(null);
    setPlaces([]);

    try {
      console.log("Fetching places...");

      const response = await fetch(
        `https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.features && data.features.length > 0) {
        setPlaces(data.features);
      } else {
        setError("No places found. Try again later.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to load places. Check API key or network.");
    }

    setLoading(false);
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center relative"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      ></motion.div>

      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg max-w-3xl">
        <motion.h2
          className="text-4xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover Amazing Places
        </motion.h2>
        <motion.p
          className="text-lg text-white mb-6 font-extrabold pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore breathtaking destinations, unique experiences, and unforgettable moments.
        </motion.p>

        
        <button
          onClick={fetchPlaces}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Explore Now
        </button>

        
        {error && <p className="text-red-500 mt-4">{error}</p>}

        
        {loading && <p className="text-white mt-4">Loading places...</p>}

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {places.length > 0 &&
            places.map((place) => (
              <div
                key={place.properties.place_id}
                className="bg-white p-4 rounded-lg shadow-lg text-black"
              >
                <img
                  src={`https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=300&center=lonlat:${place.geometry.coordinates[0]},${place.geometry.coordinates[1]}&zoom=14&apiKey=${apiKey}`}
                  alt={place.properties.name || "Unknown Place"}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">
                  {place.properties.name || "No Name Available"}
                </h3>
                <p className="text-gray-700">
                  {place.properties.formatted || "No address available"}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.properties.name || "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mt-2 block"
                >
                  Learn More
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreNow;
