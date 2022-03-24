import React, { useEffect } from "react";
import "../Cart/Cart.css"
import plus from "../../assets/times-solid.svg"
import { MenuContext } from "../../Contexts/MenuContext";
import TextField from '@mui/material/TextField';
import { render } from "@testing-library/react";
import { faL } from "@fortawesome/free-solid-svg-icons";


export default function Cart({setShowCart}){

    const {CartItems,setCartItems} = React.useContext(MenuContext)
    const [total,setTotal] = React.useState(0)
    const {itemIndex,setItemIndex}= React.useContext(MenuContext)
    const [toggleBtn,setToggleBtn] = React.useState(true)
    const [up,setUp] = React.useState(0)
    const [checkout,setCheckout] = React.useState(false)

    
    useEffect(()=>{
        setTotal(()=>0)
            CartItems.map((item,value)=>{
                return(
                    setTotal((prev)=>prev+item.price*item.quantity)
                )
            })
    },[CartItems])


    
    function handleRemove(item,value){
        
        //create new list after remove  item
        setCartItems(CartItems.filter((product,index)=>index!==CartItems.indexOf(item)))

        //set total back to 0 for recalculation
        setTotal(()=>0)
    }


    //update cart when quantity changes
   
    function updateQty(item,value){
        setItemIndex(()=>value)

        //dommi for rerender
        setUp((prev)=>prev+1)

      
    }

    
    useEffect(()=>{
        setCartItems(()=>CartItems.map((item,value)=>{
            if(value === itemIndex){
                return(
                    {...item,"quantity": toggleBtn ? item.quantity + 1 : item.quantity-1 }
                    )      
            }else{
                return (item)
            }
        }))
        
    },[up])

    //re render cart if button clicked, total changed, or index of the item
    // useEffect(()=>{
      
    // },[itemIndex,total,toggleBtn])


    return(
        <div className="cart-container">
            <div>

                
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

                                <div className="qty-section">

                                    <button className="plus qty-btn" onClick={()=>{setToggleBtn(true);updateQty(item,value);}}>+</button>
                                    
                                    <h2>{item.quantity}</h2>
                                    <button className="minus qty-btn"onClick={()=>{setToggleBtn(false);updateQty(item,value);}}>-</button>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
    
            <div className="total-section">
                <div>
                    <p>Subtotal</p>
                    <p className="total-price">$ {total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} USD</p>
                </div>

                <button className="checkout" 
                    onClick={()=>setCheckout(true)}>Continue to Checkout</button>
                <p className= {`error-message ${checkout && "hide"}`} >Checkout is currently disabled.</p>
            </div>
            
        </div>
    )
}