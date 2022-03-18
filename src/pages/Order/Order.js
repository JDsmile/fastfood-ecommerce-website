import React from "react";
import "./Order.css"
import Menu from "../../components/menu/Menu";
import Footer from "../../components/Footer/Footer"

export default function Order(){
    return(
        <>
        <div className="order-title">
            <h1>Get your food <span>delivered</span>, or <span>pick-up</span> in store.</h1>
        </div>
            <Menu/>
            <Footer/>
        </>
    )
}