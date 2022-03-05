import React from "react";
import "./Footer.css"
import logo from "../../assets/logo.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
    return(
        <>
       <div className="footer-container">

           <div className="footer-left">
               <img src={logo} alt="logo image" />
               <p className="footer-title"> Takesway & Delivery template<br/> for small - medium businesses.</p>
           </div>

           <div className="footer-right">
               <p>Company</p>

               <ul>
                   <li>Home</li>
                   <li>Order</li>
                   <li>FAQ</li>
                   <li>Contact</li>  
               </ul>
           </div>
        </div>

        <div className="social-list">
            <ul>
                <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
                <FontAwesomeIcon icon={faYoutube} className="social-icon"/>
            </ul>
        </div>
        </>
    )
}