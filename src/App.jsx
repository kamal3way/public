import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Protectroute from './Components/Protectroute';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Gallary from './Components/Gallary';
import About from './Components/About';
import Contact from './Components/Contact';
import LearnMore from './Components/Learnmore';

import Services from './Components/Services';
import ExploreNow from './Components/Explornow';


function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/gallary" element={<Gallary />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/learn-more" element={<LearnMore />} />
                    <Route path="/explorenow" element={<ExploreNow/>}/>
        
                    <Route path="/contact" element={<Contact />} />
                    
                    <Route path="/services" element={<Services/>}/>
                    
                    <Route
                        path="/profile"
                        element={
                            <Protectroute>
                                <Profile />
                            </Protectroute>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
