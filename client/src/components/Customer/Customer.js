import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from 'axios'
import '../Customer/style.css'

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));


function Customer({eventInfo}){

    async function likeEvent(){
        const data = await axios.post('http://localhost:3010/likeEvent',{
            eventName:eventInfo.eventName,
            custId:`${localStorage.getItem('profile')._id}`
        })
    }

    return (
      <>
        <div className="container">
          <div className="heading">
            <img src={eventInfo.image} alt="" className="image" />
            <h2 className="eventName">{eventInfo.eventName}</h2>
          </div>
          <div className="info">
            <h2>Location : {eventInfo.location}</h2>
            <h2>Date     : {eventInfo.date}</h2>
            <h2>Seat     : {eventInfo.seat}</h2>
            <h2>Available Seat : {eventInfo.seat - eventInfo.bookedSeat}</h2>
            <h2>Price : {eventInfo.price}</h2>
            {/* <ThumbUpIcon onClick={()=>{likeEvent()}}/> */}
          </div>
          <ColorButton variant="contained" className="button">
            JOIN NOW
          </ColorButton>
        </div>
      </>
    );

    
}

export default Customer;