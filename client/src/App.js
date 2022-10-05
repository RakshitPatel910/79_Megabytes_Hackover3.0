import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Navbar from './components/Navbar/Navbar.js';
import Auth from './components/Auth/Auth.js';
import SignUp from './components/Auth/SignUp/SignUp.js';
import SignIn from './components/Auth/SignIn/SignIn.js';
import AdminSignIn from './components/Auth/AdminSignIn/AdminSignIn.js';
import Home from './components/Home/Home.js';
import Admin from './components/Admin/Admin'
import Customer from './components/Customer/Customer'

function App() {

    const [user, setUser] = useState(0)
    // const [user, setUser] = useState(localStorage.getItem('profile'))
    const [customer, setCustomer] = useState(null);
    const [organizer, setOrganizer] = useState(null);



    useEffect(() => { }, [user])
    

    
    // return(
    //   <>
    //     <BrowserRouter>

    //       {/* <Navbar /> */}

    //       <Routes>

    //         {/* <Route path={user ? '/home' : '/'} element={ user ? <Home user={user} customer={customer} organizer={organizer} /> : <Auth setUser={setUser} setOrganizer={setOrganizer} />} />
            
    //         <Route path='/*' element={ user ? <Home user={user} customer={customer} organizer={organizer} /> : <Auth setUser={setUser} setOrganizer={setOrganizer}/>}/> */}

    //          {user ? 
    //            <Route path='/*' element={<Home />} />:
    //            <Route path='/' element={<Auth />} />
    //          }

    //         <Route path='/admin' exact element={<AdminSignIn />} />
    //       </Routes>

    //     </BrowserRouter>
    //   </>
    // )

    // return(
    //   <>
    //     <Admin/>
    //   </>
    // )
    const profile = {
      eventName: "MusicalConcert",
      location: "NewYork",
      seat: 1000,
      bookedSeat: 10,
      image:
        "data:image/jpeg;base64,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",
      price: 2000,
    };

    return(
      <>
        <Customer eventInfo={profile}/>
      </>
    )


}

export default App