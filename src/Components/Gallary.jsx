import React, { useState } from "react";
import c4 from "../images/C4.jpg";
import c1 from "../images/C1.jpg";
import c3 from "../images/C3.jpg";
import c2 from "../images/C2.jpg";
import d1 from "../images/d1.jpg";
import d3 from "../images/d3.jpg";
import t1 from "../images/t1.jpg";
import b4 from "../images/B4.jpg";
import b6 from "../images/B6.jpg";

const images = [
  { id: 1, src: c4, category: "Nature", title: "Mountain View" },
  { id: 2, src: c1, category: "City", title: "City Lights" },
  { id: 3, src: c3, category: "Nature", title: "Unique Path Place" },
  { id: 4, src: c2, category: "Beach", title: "Sunny Beach" },
  { id: 5, src: d1, category: "City", title: "Urban Architecture" },
  { id: 6, src: d3, category: "Beach", title: "Tropical Paradise" },
  { id: 7, src: t1, category: "River", title: "Musti River" },
  { id: 8, src: b4, category: "Fun", title: "Funny Place" },
  { id: 9, src: b6, category: "Fun", title: "Realistic Place" },
];


const categories = ["All", ...new Set(images.map((img) => img.category))];

const Gallary = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 text-gray-600 py-12 px-6 md:px-12 lg:px-24">
      
      <div className="sticky top-16 bg-blue shadow-md z-50 py-4 px-6 mb-8 flex items-center justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-medium rounded-lg ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-600"
            } hover:bg-indigo-500 hover:text-white transition-all`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 cursor-pointer"
            onClick={() => setLightboxImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white font-semibold text-lg">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox (Full-Screen Image Preview) */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <img src={lightboxImage} alt="Full view" className="max-w-full max-h-full rounded-lg" />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold bg-red-600 px-4 py-2 rounded-lg"
            onClick={() => setLightboxImage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallary;
