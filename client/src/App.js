import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js';
import Auth from './components/Auth/Auth.js';
import SignUp from './components/Auth/SignUp/SignUp.js';
import SignIn from './components/Auth/SignIn/SignIn.js';
import AdminSignIn from './components/Auth/AdminSignIn/AdminSignIn.js';
import Home from './components/Home/Home.js';
import Admin from './components/Admin/Admin'

function App() {

    // const [user, setUser] = useState(1)
    const [user, setUser] = useState(0)
    const [customer, setCustomer] = useState(null);
    const [organizer, setOrganizer] = useState(null);

    useEffect(() => {
      
    }, [user])
    

    return (
      <>
        <BrowserRouter>

          {/* <Navbar /> */}

          <Routes>
            <Route path='/*' element={ user ? <Home user={user} customer={customer} organizer={organizer} /> : <Auth setUser={setUser} setOrganizer={setOrganizer} />} />
            <Route path='/admin' exact element={<AdminSignIn />} />
          </Routes>

        </BrowserRouter>
      </>
    )

    // return(
    //   <>
    //     <Admin/>
    //   </>
    // )
}

export default App