import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // for styling

function Profile() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // Remove the logged-in user's data from localStorage on logout
        localStorage.removeItem('loggedInUser');
        navigate('/'); // Redirect back to login page
    };

    // Get the logged-in user's email from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');

    return (
        <div className="profile-container">
            <h2>Welcome, {loggedInUser}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;
