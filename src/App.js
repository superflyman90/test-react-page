import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;