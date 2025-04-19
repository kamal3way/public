import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo1 from "../images/logo1.png";

function Login() {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const GOOGLE_SHEET_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/11ASVnSSG-AQSwNmQJV250opMWWJzw6IIbKx4Gf2l0J0/values/Sheet1?key=AIzaSyCfhHVnmBqDwwDhqd_nBjZZkpUkQLksSxk';
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(GOOGLE_SHEET_API_URL);
            const sheetData = response.data.values;

            if (!sheetData || sheetData.length === 0) {
                setError('No data found in Google Sheet.');
                return;
            }

            const headers = sheetData[0];
            const data = sheetData.slice(1).map(row => {
                let obj = {};
                row.forEach((value, index) => {
                    obj[headers[index].toLowerCase()] = value;
                });
                return obj;
            });

            const user = data.find(row =>
                (row.email === identifier || row.username === identifier) && row.password === password
            );

            if (user) {
                localStorage.setItem('loggedInUser', user.username || user.email);
                navigate('/profile');
            } else {
                setError('Invalid email/username or password.');
            }
        } catch (error) {
            console.error('Error fetching Google Sheet data:', error);
            setError('Something went wrong.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
                {/* Centered Logo */}
                <div className="flex justify-center mb-6">
                    <img src={logo1} alt="Logo" className="w-25 h-24 object-contain hover:scale-110 transition" />
                </div>

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                
                <input
                    type="text"
                    placeholder="Email or Username"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    className="w-full p-4 mb-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-4 mb-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500 transition duration-300"
                />
                {error && (
                    <p className="text-red-500 text-center text-sm mb-4">{error}</p>
                )}
                <button
                    type="submit"
                    className="w-full p-4 bg-indigo-600 text-white text-lg rounded-xl transition duration-300 hover:bg-indigo-700 hover:scale-105 transform"
                >
                    Login
                </button>
                <div className="mt-6 text-center">
                    <p>
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
