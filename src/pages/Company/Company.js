import React from "react";
import "./Company.css";
import img from "../../assets/co-img-1.png"
import wave from "../../assets/blue-wave.svg"
import Footer from "../../components/Footer/Footer"


export default function Company(){

    return(
        <>

        <div className="hero-section">
            <div className="hero-title">
                <h1>Our company focuses on <span>food and people.</span> </h1>
            </div>
        </div>

        <div className="main-content">
            <div className="content-section flex-container">
                <div className="content-info">
                    <h2 className="section-title">The home of fresh products</h2>
                    <p className="section-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo officiis quasi ipsum vel ipsam sequi eligendi eius at. Sed?</p>
                </div>

                <img src={img} alt="" />
            </div>

        </div>

        <div className="static-content">
            <div className="content-section grid">
                <div>
                    <h2 className="num">62</h2>
                    <img src={wave} alt="" />
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <h2 className="num">139</h2>
                    <img src={wave} alt="" />
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <h2 className="num">34</h2>
                    <img src={wave} alt="" />
                    <p>Fiesty Menu Items</p>
                </div>
                <div>
                    <h2 className="num">57</h2>
                    <img src={wave} alt="" />
                    <p>Fiesty Menu Items</p>
                </div>
            </div>
        </div>

        <Footer/>
       
        </>
    )
}