import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar.js';
import Event from './OrganizerHome/Event.js';
// import Auth from './components/Auth/Auth.js';
import EventCard from './OrganizerHome/EventCard/EventCard.js';

function Home() {
    return (
        <>
            <Navbar />
            {/* <EventCard /> */}
            <Event />
            <Routes>
                {/* <Auth /> */}
            </Routes>
        </>
    )
}

export default Home
// vinit