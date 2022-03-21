import React from "react";
import "../Cart/Cart.css"
import plus from "../../assets/times-solid.svg"
import { MenuContext } from "../../Contexts/MenuContext";
import TextField from '@mui/material/TextField';


export default function Cart({setShowCart}){
    const {CartItems,setCartItems} = React.useContext(MenuContext)
    const [total,setTotal] = React.useState(233)
    return(
        <div className="cart-container">
            <div className="header-section">
                <h1>Your Order</h1>
                <img src={plus} alt="" className="nav-close" onClick={()=>setShowCart(false)}/>
                
            </div>

            {console.log(CartItems)}

            <div className="cart-items-container">

                {CartItems.map((item)=>{
                    return(
                        <div className="cart-item">

                            <img src={item.img} className="small-img"/>
                            <div className="product-info">
                                <div>
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-price">$ {item.price.toFixed(2)} USD</p>
                                </div>

                                <button className="remove-btn">Remove</button>
                            </div>

                            <TextField
                                        className="quantity"
                                        type="number"
                                        size="small"
                                        defaultValue ={1}
                                        
                                        InputProps={{ inputProps: { min: 0} }}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                        </div>

                    )
                })}
            </div>

            <div className="total-section">
                <div>
                    <p>Subtotal</p>
                    <p className="total-price">$ {total.toFixed(2)} USD</p>
                </div>

                <button className="checkout">Continue to Checkout</button>
            </div>
            
        </div>
    )
}