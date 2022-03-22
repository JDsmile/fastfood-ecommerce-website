import React, { useEffect } from "react";
import "../Cart/Cart.css"
import plus from "../../assets/times-solid.svg"
import { MenuContext } from "../../Contexts/MenuContext";
import TextField from '@mui/material/TextField';
import { render } from "@testing-library/react";


export default function Cart({setShowCart}){
    const {CartItems,setCartItems} = React.useContext(MenuContext)
    const [total,setTotal] = React.useState(0)
    const {productQuantity,setProductQuantity}= React.useContext(MenuContext)
    const {itemIndex,setItemIndex}= React.useContext(MenuContext)


    useEffect(()=>{
            CartItems.map((item,value)=>{
                return(
                    setTotal(total+item.price*item.quantity)
                )
            })
    },[CartItems])
    

    function handleRemove(item,value){

        //create new array without the selected one
        setCartItems(CartItems.filter((product,index)=>index!==CartItems.indexOf(item)))

        //set to 0 for recalculation
        setTotal(()=>0)

    }

    return(
        <div className="cart-container">
            <div className="header-section">
                <h1>Your Order</h1>
                <img src={plus} alt="" className="nav-close" onClick={()=>setShowCart(false)}/>
                
            </div>

            <div className="cart-items-container">

                {CartItems.map((item,value)=>{
                    return(
                        <div className="cart-item">

                            <img src={item.img} className="small-img"/>
                            <div className="product-info">
                                <div>
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-price">$ {item.price.toFixed(2)} USD</p>
                                </div>

                                <button className="remove-btn" 
                                    onClick={()=>handleRemove(item,value)}>Remove</button>
                            </div>

                            <TextField
                                        className="quantity"
                                        type="number"
                                        size="small"
                                        defaultValue={item.quantity}
                                        onChange={(e)=>setProductQuantity(e.target.value)}
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
                    <p className="total-price">$ {total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} USD</p>
                </div>

                <button className="checkout">Continue to Checkout</button>
            </div>
            
        </div>
    )
}