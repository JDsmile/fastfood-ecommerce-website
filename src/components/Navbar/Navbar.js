import React from "react";

import "./Navbar.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const [active,setActive] = React.useState(0)

    const navigate = useNavigate()

    const navLinks=[
        {
            id:0,
            to:"/",
            name: "Home",
        },
        {
            id:1,
            to:"/order",
            name: "Order",
        },
        {
            id:2,
            to:"/company",
            name: "Company",
        },
        {
            id:3,
            to:"/faq",
            name: "FAQ",
        },
    ]

    function checkActive(value){
        setActive(value)
    }

    return(

        <div className="nav-wrap">
            <div className="nav-container">
                <a href="/">
                    <img className="logo" src={logo} alt="logo image"/>
                </a>
            </div>

            <div className="nav-links">
                <nav>
                    <ul>
                        {/* desktop nav */}
                        {navLinks.map((link,value)=>{
                            return(
                              <Link to={link.to} onClick={()=>checkActive(value)} key={link.id}><li className={value===active? "active-tab": undefined}>{link.name}</li></Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}