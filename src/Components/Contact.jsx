import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ContactUs() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [mapLoaded, setMapLoaded] = useState(false);

    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxjFe7YZgud8O2Ojt_9zxvy3n6aYMenRcrHBW1-d5vCuhZlahpLooXXiZgxsQv229u8yQ/exec";
    const GOOGLE_MAPS_API_KEY = ""; // Replace with your actual API key

    const gujaratCoordinates = { lat: 22.2587, lng: 71.1924 }; // Center of Gujarat, India

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, {
                username,
                email,
                message,
            });
            if (response.data.error) {
                setError("Error sending message.");
                setSuccess("");
            } else {
                setSuccess("Message sent successfully!");
                setUsername("");
                setEmail("");
                setMessage("");
            }
        } catch (error) {
            console.error("Error during message submission:", error);
            setError("Something went wrong.");
            setSuccess("");
        }
    };

    useEffect(() => {
        const loadMapScript = () => {
            if (window.google) {
                setMapLoaded(true);
                return;
            }

            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap`;
            script.async = true;
            script.defer = true;
            script.onerror = () => {
                console.error("Google Maps API script loading error");
                setError("Failed to load Google Maps.");
            };
            document.head.appendChild(script);
        };

        loadMapScript();

        // Clean up: Remove script if the component is unmounted
        return () => {
            const script = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
            if (script) {
                script.remove();
            }
        };
    }, []);

    
    window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: gujaratCoordinates,
            zoom: 7,
        });

        new window.google.maps.Marker({
            map,
            position: gujaratCoordinates,
        });

        setMapLoaded(true);
    };

    return (
        <motion.div
            className="min-h-screen bg-blue-100 flex flex-col items-center py-12 px-4 md:px-16  "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-4xl font-bold text-black-800 mb-12  pt-10 hover:shadow-xl">Contact Us</h1>

            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
                
                <motion.div
                    className="bg-white p-8 rounded-3xl shadow-2xl flex-1 hover:bg-blue-150"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-8">Get in Touch</h2>
                    <form onSubmit={handleSignUp}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full p-4 mb-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-4 mb-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                        />
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full p-4 mb-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                        />
                        {error && (
                            <p className="text-red-500 text-center text-sm mb-4">{error}</p>
                        )}
                        {success && (
                            <p className="text-green-500 text-center text-sm mb-4">{success}</p>
                        )}
                        <motion.button
                            type="submit"
                            className="w-full p-4 bg-indigo-600 text-white text-lg rounded-xl transition duration-300 hover:bg-indigo-700 hover:scale-105 transform"
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>

               
                <motion.div
                    className="flex-1 bg-white p-8 rounded-3xl shadow-2xl hover:bg-blue-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Location</h2>
                    <div id="map" className="w-full h-64 rounded-xl shadow-lg mb-6"></div>
                    {!mapLoaded && <p className="text-center text-gray-500 mb-4">Loading map...</p>}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Address:</h3>
                        <p className="text-gray-700">
                            Gujarat, India <br />
                            Latitude: 22.2587, Longitude: 71.1924
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default ContactUs;