import React from "react";
import Navbar from "../Navbar/Navbar"
import "./Header.css"

export default function Header(){
    return(
        <>
        <div className="header-container">
            <p className="message">We're open and available for takewasy & delivery.</p>
        </div>
        <Navbar/>
        </>
    )
}