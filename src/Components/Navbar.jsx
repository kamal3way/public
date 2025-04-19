import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo1 from "../images/logo1.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const loggedInUser = localStorage.getItem('loggedInUser');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-indigo-600 py-2 px-2 shadow-md fixed w-full z-20">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="flex items-center space-x-2">
                    <img src={logo1} alt="Logo" className="w-14 h-14 object-contain" />
                    <span className="text-white hover:bg-white-100 text-xl font-bold">Wonder Hub</span>
                </div>
                
                
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                
                
                <div className={`md:flex md:items-center md:space-x-4 ${menuOpen ? "block" : "hidden"} absolute md:static bg-indigo-600 md:bg-transparent w-full left-0 top-14 md:w-auto md:flex-row flex flex-col text-center md:text-left`}>
                    <Link to="/" className="text-white text-lg font-medium  hover:text-indigo-300 transition py-2">Home</Link>
                    <Link to="/about" className="text-white text-lg font-medium hover:text-indigo-300 transition py-2">About</Link>
                    <Link to="/services" className="text-white text-lg font-medium hover:text-indigo-300 transition py-2">Services</Link>
                    <Link to="/gallary" className="text-white text-lg font-medium hover:text-indigo-300 transition py-2">Gallary</Link>
                     <Link to="/profile" className="text-white text-lg font-medium hover:text-indigo-300 transition py-2">profile</Link> 

                    {loggedInUser ? (
                        <div className="relative">
                            <button 
                                onClick={toggleDropdown} 
                                className="text-white text-lg font-medium hover:text-indigo-200 transition"
                            >
                                Profile &#9660;
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
                                    <ul>
                                        <li className="px-4 py-2 hover:bg-indigo-100">
                                            <Link to="/profile" className="block font-medium">Profile</Link>
                                        </li>
                                        <li className="px-4 py-2 hover:bg-indigo-100">
                                            <button 
                                                className="block w-full text-left"
                                                onClick={() => { 
                                                    localStorage.removeItem('loggedInUser'); 
                                                    window.location.reload(); 
                                                }}
                                            >
                                                Log Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-x-4 py-2">
                            <Link to="/login" className="text-white text-lg font-medium hover:text-indigo-200 transition">Login</Link>
                            <Link to="/signup" className="text-white text-lg font-medium hover:text-indigo-200 transition">Sign Up</Link>
                        </div>
                    )}
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
