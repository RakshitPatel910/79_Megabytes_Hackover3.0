import React, { useState, useEffect } from 'react';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';



const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(0); 

    useEffect(()=>{
        // console.log("isSignUp changing");
    },[isSignUp])

    return (
      <>
        {isSignUp ? (
          <SignUp  setIsSignUp={setIsSignUp} />
        ) : (
          <SignIn  setIsSignUp={setIsSignUp} />
        )}
        {/* <Signup />
        <Signin /> */}
      </>
    );
}

export default Auth