import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import './style.css'


function Card(){
    return(
        <>
            <div className="card">
                <h1 className="cardHeader">Satyam Singh</h1>
                <h2 className="cardInfo">ss4078017@gmail.com</h2>
                <a href="http://" className="adhaar">Adhaar Card <ContactPageIcon className="icon"/></a>
            </div>
        </>
    )
}

export default Card