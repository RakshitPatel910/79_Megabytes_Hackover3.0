import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js';
import Auth from './components/Auth/Auth.js';
import SignUp from './components/Auth/SignUp/SignUp.js';
import SignIn from './components/Auth/SignIn/SignIn.js';
import AdminSignIn from './components/Auth/AdminSignIn/AdminSignIn.js';
import Home from './components/Home/Home.js';

function App() {

    const [user, setUser] = useState(1)

    useEffect(() => {
      
    }, [user])
    

    return (
      <>
        <BrowserRouter>

          {/* <Navbar /> */}

          <Routes>
            <Route path='/' exact element={ user ? <Home /> : <Auth setUser={setUser} />} />
            <Route path='/admin' exact element={<AdminSignIn />} />
          </Routes>

        </BrowserRouter>
      </>
    )
}

export default App