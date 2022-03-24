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
                   <li><a href="/">Home</a></li>
                   <li><a href="/order">Order</a></li>
                   <li><a href="/faq">FAQ</a></li>
                   <li><a href="/company">Company</a></li>
               </ul>
           </div>
        </div>

        <div className="social-list">
            <ul>
                <a href="https://twitter.com/?lang=en" target="_blank"><FontAwesomeIcon icon={faTwitter} className="social-icon"/></a>
                <a href="https://www.instagram.com/?hl=en" target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a>
                <a href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} className="social-icon"/></a>
                
                
              
            </ul>
        </div>
        </>
    )
}