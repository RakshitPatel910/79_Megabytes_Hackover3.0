import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import './style.css'


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

 


function Card(){
    return (
      <>
        <div className="card">
            <div>
                <h1 className="cardHeader">Satyam Singh</h1>
                <h2 className="cardInfo">ss4078017@gmail.com</h2>
                <a href="http://" className="adhaar">
                    Adhaar Card <ContactPageIcon className="icon" />
                </a>
            </div>
            <div className="approve" >
                <ColorButton variant="contained" className="button">
                    Approve
                </ColorButton>
                <ColorButton variant="contained" className="button">
                    Disapprove
                </ColorButton>
            </div>
        </div>
      </>
    );
}

export default Card