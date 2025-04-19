import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import d2 from "../images/d2.jpg";
import t2 from "../images/t2.jpg";
import b2 from "../images/B2.jpg";
import t4 from "../images/t4.jpg";
import t7 from "../images/t7.webp";
import b5 from "../images/B5.jpg";
import bb1 from "../images/bb1.jpg";

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            
            <div className="bg-blue-100 py-16 pt-24"> 
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                   
                    <div className="md:w-1/2 space-y-6 px-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                            Welcome to <span className="text-pink-500">the Wonder Hub</span>!
                        </h1>
                        <p className="text-lg md:text-xl text-black-900 font-bold">
                            At Wonder Hub, we aim to ignite your imagination and help you create memories that last a lifetime.
                            From breathtaking destinations to enriching experiences, our mission is to make your journey truly unforgettable.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/explorenow" className="px-8 py-3 bg-pink-400 text-black font-semibold rounded-lg shadow hover:bg-pink-500 transition-all">
                                Explore Now
                            </Link>
                            <Link to="/contact" className="px-8 py-3 bg-indigo-700 text-white font-semibold rounded-lg shadow hover:bg-indigo-800 transition-all">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    
                    <div className="md:w-1/2 mt-8 md:mt-0 px-4">
                        <Carousel
                            showArrows
                            autoPlay
                            infiniteLoop
                            showThumbs={false}
                            interval={4000}
                            className="rounded-lg shadow-lg w-full md:w-[80%] mx-auto h-[400px]"
                        >
                            {[d2, t2, b2, t4, t7, b5, bb1].map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-96 object-cover rounded-lg"
                                    />
                                    <p className="legend text-sm bg-indigo-800 text-white">
                                        Discover Amazing Places
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

           
            <div className="container mx-auto py-16 px-4 bg-blue-100">
                <h2 className="text-3xl text-center mb-8 text-blue-800 font-extrabold">
                    Why Choose Wonder Hub?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {["Breathtaking Destinations", "Unforgettable Experiences", "Seamless Planning"].map((title, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-blue-200"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-indigo-700">{title}</h3>
                            <p className="text-gray-700">
                                {title === "Breathtaking Destinations"
                                    ? "Explore stunning locations."
                                    : title === "Unforgettable Experiences"
                                    ? "Create lifelong memories."
                                    : "Enjoy hassle-free planning."}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

           
            <footer className="bg-indigo-600 text-white py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-white-400">
                            Discover breathtaking destinations with us. Your adventure starts here.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {["Tour Packages",  "Flight Booking", "Travel Insurance"].map((service, index) => (
                                <li key={index}>
                                    <a href="/services" className="text-white-400 hover:text-blue-900">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-white-400">
                            <li>Phone: +1 234 567 890</li>
                            <li>Email: info@tourism.com</li>
                            <li>Address: 123 Travel Lane, Adventure City</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            {["facebook-f", "twitter", "instagram", "youtube"].map((icon, index) => (
                                <a key={index} href="/" className="text-white-400 hover:text-blue-900">
                                    <i className={`fab fa-${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-900 mt-8 pt-4 text-center">
                    <p className="text-lg text-white-400">
                        &copy; 2025 Tourism Website 3way Technology. All rights reserved. Nakum Bansari.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
