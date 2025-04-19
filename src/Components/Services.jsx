import React, { useState } from "react";
import { FaHotel, FaPlane, FaUmbrellaBeach, FaCar, FaShip, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    title: "Luxury Hotels",
    description: "Stay in the best hotels with world-class amenities and breathtaking views.",
    icon: <FaHotel className="text-4xl text-blue-500" />,
  },
  {
    title: "Flight Booking",
    description: "Hassle-free flight bookings at competitive prices to your dream destinations.",
    icon: <FaPlane className="text-4xl text-blue-500" />,
  },
  {
    title: "Beach Resorts",
    description: "Relax at serene beach resorts and enjoy the beauty of nature.",
    icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
  },
  {
    title: "Car Rentals",
    description: "Explore destinations at your own pace with our affordable car rental services.",
    icon: <FaCar className="text-4xl text-blue-500" />,
  },
  {
    title: "Cruise Trips",
    description: "Experience luxury and adventure on our exclusive cruise trips.",
    icon: <FaShip className="text-4xl text-blue-500" />,
  },
  {
    title: "Guided Tours",
    description: "Join expert-guided tours to explore destinations like never before.",
    icon: <FaMapMarkedAlt className="text-4xl text-blue-500" />,
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="bg-blue-100 py-16 ">
      <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-8  hover:shadow-xl">Our Services</h2>
      
        <p className="text-lg text-black-800 font-bold mb-12">
          Discover the wide range of services we offer to make your travel experience unforgettable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`bg-white shadow-md rounded-lg p-8 transform transition-all duration-500 ease-in-out cursor-pointer 
                ${
                  activeCard === index
                    ? "scale-110 shadow-2xl bg-blue-150"
                    : "hover:scale-105 hover:shadow-xl hover:bg-blue-50"
                }`
              }
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-black-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
