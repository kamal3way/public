import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo1 from "../images/logo1.png";

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxy4f0pYl8Sy25HEiVszsba_r07AY6rLaO3NgbAClnbRNQSLtfvDTwF2PjVdPXxUCAmdQ/exec';

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(GOOGLE_APPS_SCRIPT_URL, {
                username,
                email,
                password
            });
            if (response.data.error) {
                setError('Error creating user.');
                setSuccess('');
            }
            else {
                setSuccess('User created successfully!');
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            setError('Something went wrong.');
            setSuccess('');
        }
    };

    return (
        <div className="min-h-screen bg-blue-100 to-indigo-200 flex justify-center items-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl">

                 <div className="flex justify-center mb-6">
                                    <img src={logo1} alt="Logo" className="w-25 h-24 object-contain hover:scale-110 transition" />
                                </div>
                <h2 className="text-3xl font-bold text-center text-stone-800 mb-8">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full p-2 mb-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 mb-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 mb-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                    />
                    {error && (
                        <p className="text-red-500 text-center text-sm mb-4">{error}</p>
                    )}
                    {success && (
                        <p className="text-green-500 text-center text-sm mb-4">{success}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full p-4 bg-indigo-600 text-white text-lg rounded-xl transition duration-300 hover:bg-indigo-700 hover:scale-105 transform"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p>
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
