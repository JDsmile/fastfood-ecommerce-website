import React from "react";
import "../Cart/Cart.css"
import plus from "../../assets/times-solid.svg"
import { MenuContext } from "../../Contexts/MenuContext";


export default function Cart({setShowCart}){
    const {CartItems,setCartItems} = React.useContext(MenuContext)
    return(
        <div className="cart-container">
            <div className="header-section">
                <h1>Your Order</h1>
                <img src={plus} alt="" className="nav-close" onClick={()=>setShowCart(false)}/>
                
            </div>

            {console.log(CartItems)}

            {CartItems.map((item)=>{
                return(
                    <img src={item.img}></img>
                )
            })}
            
        </div>
    )
}