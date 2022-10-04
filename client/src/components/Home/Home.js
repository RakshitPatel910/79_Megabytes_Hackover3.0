import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar.js';
// import Auth from './components/Auth/Auth.js';

function Home() {
    return (
        <>
            <Navbar />
            
            <Routes>
                {/* <Auth /> */}
            </Routes>
        </>
    )
}

export default Home