import React, { useEffect } from "react";
import "../Cart/Cart.css"
import plus from "../../assets/times-solid.svg"
import { MenuContext } from "../../Contexts/MenuContext";

export default function Cart({setShowCart}){

    const {CartItems,setCartItems} = React.useContext(MenuContext)
    const [total,setTotal] = React.useState(0)
    const {itemIndex,setItemIndex}= React.useContext(MenuContext)
    const [toggleBtn,setToggleBtn] = React.useState(true)
    const [up,setUp] = React.useState(false)
    const [checkout,setCheckout] = React.useState(false)
  


    useEffect(()=>{
     
        setTotal(()=>0)

        CartItems!==null &&
            CartItems.map((item,value)=>{

                //remove the item with quantity of 0  before calculation
                if(item.quantity<=0){
                    setCartItems(CartItems.filter((product,index)=>product.quantity>0))
                    return;
                }

                return(
                    setTotal((prev)=>prev+item.price*item.quantity)
                )
            })

            
    },[CartItems])


    
    function handleRemove(item,value){
        
        //create new list after remove  item
        CartItems !== null && setCartItems(CartItems.filter((product,index)=>index!==CartItems.indexOf(item)))

        //set total back to 0 for recalculation
        setTotal(()=>0)
    }


    //update cart when quantity changes
   
    function updateQty(item,value){
        setItemIndex(()=>value)
        //dommi for rerender
        setUp((true))
        
    }


    useEffect(()=>{

        if(up===false){
            return;
        }

        setCartItems(()=>CartItems.map((item,value)=>{
            if(value === itemIndex){
                
                return(
                    {...item,"quantity": toggleBtn ? item.quantity + 1 : item.quantity-1}
                    )      
            }else{
                return (item)
            }
        }))

        setUp(false)
        
    },[up])


    return(
        <div className="cart-container">
            <div>

                <div className="header-section">
                    <h1>Your Order</h1>
                    <img src={plus} alt="" className="nav-close" onClick={()=>setShowCart(false)}/>
                    
                </div>

                <div className="cart-items-container">

                    {
                     CartItems !== null && 
                        CartItems.map((item,value)=>{
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
                                        
                                        <h2 >{item.quantity}</h2>
                                        <button className="minus qty-btn"onClick={()=>{setToggleBtn(false);updateQty(item,value);}}>-</button>

                                    </div>
                                </div>
                            )
                        })
                }
                </div>
            </div>
    
            <div className="total-section">
                <div>
                    <p>Subtotal</p>
                    <p className="total-price">$ {total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} USD</p>
                </div>
                
                <p className= {`error-message ${checkout && "hide"}`} >Checkout is currently disabled.</p>   
                <button className="checkout" 
                    onClick={()=>setCheckout(true)}>Continue to Checkout</button>
                
            </div>
            
        </div>
    )
}

