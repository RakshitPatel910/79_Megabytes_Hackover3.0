import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar.js';
import Event from './OrganizerHome/Event/Event.js';
// import Auth from './components/Auth/Auth.js';
import EventCard from './OrganizerHome/Event/EventCard/EventCard.js';
import Form from './OrganizerHome/Form/Form.js';
import OrganizerHome from './OrganizerHome/OrganizerHome.js';

function Home({ user, organizer }) {
    // console.log(organizer)
    return (
        <>
            <Navbar />
            {/* <EventCard /> */}
            {/* <Event /> */}
            {/* <OrganizerHome /> */}
            
            {/* { organizer.type === 20 && <OrganizerHome /> } */}

            {/* <Form /> */}
            <Routes>
                <Route path='organizer' element={<OrganizerHome/>}/>
                <Route path='customer' element={<OrganizerHome/>}/>
            </Routes>
        </>
    )
}

export default Home
// vinit