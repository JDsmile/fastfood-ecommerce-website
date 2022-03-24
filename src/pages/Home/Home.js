import React from "react";
import './Home.css'
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar";
import BrandLogo from "../../assets/trustpilot-logo.svg"
import Image1 from "../../assets/home-img-1.png"
import Image2 from "../../assets/home-img-2.png"
import Image3 from "../../assets/home-img-3.png"
import Image4 from "../../assets/home-img-4.png"
import Image5 from "../../assets/home-img-5.png"
import Image6 from "../../assets/home-img-6.png"
import Image7 from "../../assets/home-img-7.png"
import Image8 from "../../assets/home-img-8.png"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom";


export default function Home(){
    return(

        <div className="home-container">

            <div className="hero flex-container">
                <div className="intro">
                    <h1 className="hero-h1">Beautiful food & takeaway, <span>delivered</span> to your door.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nisi, libero architecto consequuntur perspiciatis quis voluptate velit laboriosam distinctio quaerat.</p>

                    <button className="primary-btn">
                        <Link to="/order">Place an Order</Link>
                    </button>

                    <img src={BrandLogo} alt="" />

                    <div className="review-text">
                        <span>4.8 out of 5 </span>
                        based on 2000+ reviews
                    </div>
                </div>

                <div className="hero-img-wrap">
                    <img src={Image1} alt="" className="img"/>
                </div>
            </div>

            <div className="content flex-container">
                <div className="intro">
                    <h2 className="content-title">The home of fresh products</h2>
                    <p  className="content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, delectus doloremque quod consectetur quaerat a ratione, ipsam itaque ea ut vel, explicabo vitae vero et!</p>

                    <button>
                        <Link to="/company">Learn about us</Link>
                    </button>
                </div>

                <div>
                    <img src={Image2} alt="" className="img"/>
                </div>
            </div>

            <div className="content-show flex-container">
                <h2 className="content-title">How it works.</h2>

                <div className="content-items flex-container">
                    <div className="item flex-container">
                        <img src={Image3} alt="" className="img"/>
                        <h4 className="info-title">Adapt your menu items</h4>
                        <p className="content-info">Easily adapt your menu using the webflow CMS and allow customers to browsw your items</p>
                    </div>

                    <div className="item flex-container">
                        <img src={Image4} alt="" className="img"/>
                        <h4 className="info-title">Accpet online orders & takeout</h4>
                        <p className="content-info">Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                    </div>
                    
                    <div className="item flex-container">
                        <img src={Image5} alt="" className="img"/>
                        <h4 className="info-title">Manage delivery or takeout</h4>
                        <p className="content-info">Manage your own logistics and take orders simply through the ecommerce system.</p>
                    </div>
                </div>
            </div>

            <div className="menu-section">
                <h2 className="menu-title">Browse our menu</h2>
                <p className="menu-description">Use our menu to place an order online, or call our store to palce a pickup order. Fast and fresh food.</p>

                {/* menu goes here later */}

                <button className="to-menu">
                    <Link to="/company">See Full Menu</Link>
                </button>
            </div>

            <div className="content-section-home flex-container">
                <img src={Image6} alt="" className="img"/>

                <div className="info-title"> 

                    <h2 className="title">Order online with our simple checkout.</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus neque quam perspiciatis atque itaque, accusantium obcaecati eaque laboriosam, iste porro quod ea minus a libero at repellendus. Magnam, sint.</p>
                    <button className="nav-faq">
                    <Link to="/faq">See our FAQ</Link>
                </button>
                
                </div>
            </div>

            <div className="content-section-home bg-brand flex-container">
         
                <div className="info-title"> 

                    <h2 className="title">Call our store and takeaway when it suits you best.</h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit possimus neque quam perspiciatis atque itaque, accusantium obcaecati eaque laboriosam, iste porro quod ea minus a libero at repellendus. Magnam, sint.</p>
                    {/* <button className="nav-faq">Contact</button> */}

                </div>

                <img src={Image7} alt="" className="img"/>
            </div>

            <div className="content-last flex-container">

                <div className="img-content">
                    <img src={Image8} alt="" className="img"/>
                </div>

                <div className="content-info">
                    <p>Support <span>good food <br/> and local business.</span></p>

                    <button>
                        <Link to="/order">Order Now</Link>
              
                    </button>
                </div>
            </div>

            <Footer/>

        </div>
            

    )
}