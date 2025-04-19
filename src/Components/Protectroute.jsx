// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Protectroute = ({ children }) => {
    // Check if the user is logged in (by checking localStorage)
    const loggedInUser = localStorage.getItem('loggedInUser');

    // If user is not logged in, redirect to login page
    if (!loggedInUser) {
        return <>
        <Navigate to="/login" replace />;
        </>
    }

    // If user is logged in, allow access to the children (profile page in this case)
    return children;
};

export default Protectroute;
