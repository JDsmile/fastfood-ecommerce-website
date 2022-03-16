import React from "react";

import "./Navbar.css"
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/cart-shopping-solid.svg"
import bars from "../../assets/mobile-nav.svg"

export default function Navbar(){
    const [active,setActive] = React.useState(0)
    const [cartQuantity,setCartQuantity] = React.useState(0)
    const [showMenu,setShowMenu] = React.useState(false)

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
                    <ul className="desktop-menu">
                        {/* desktop nav */}

                        {navLinks.map((link,value)=>{
                            return(
                              <Link to={link.to} onClick={()=>checkActive(value)} key={link.id}><li className={value===active? "active-menu": undefined}>{link.name}</li></Link>
                            )
                        })}
                    </ul>
                </nav>

                <div className="img-container">
                    <img src={cart} alt="shopping cart icon" className="cart"/>
                    <p className="cart-quantity">{cartQuantity}</p>
                </div>
                {/* mobile nav */}
                <nav>
                    <div className="mobile-nav-container">
                        <img src={bars} alt="mobile navigation toggle" className="mobile-nav-toggle" onClick={()=>setShowMenu(!showMenu)}/>
                            <ul className="mobile-nav" 
                            style={{display: showMenu? "block" :"none"}}>
                                
                                {navLinks.map((link,value)=>{
                                    return(
                                    <Link to={link.to} onClick={()=>checkActive(value)} onClick={()=>setShowMenu(false)} key={link.id}><li className={value===active? "active-tab": undefined}>{link.name}</li></Link>
                                    )
                                })}
                            </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}