import React from "react";
import "./Menu.css";
import data from "../../data/menu.json";
import TextField from '@mui/material/TextField';
import { MenuContext } from "../../Contexts/MenuContext";


export default function Menu(){
    const [menuTab,setMenuTab] = React.useState(data.Burgers)
    const [activeBtn,setActiveBtn] = React.useState(false)
    const [tabIndex,setIndex] = React.useState(0)
    const menuList=["Burgers","Drinks","Sides"]

    const {CartItems,setCartItems} = React.useContext(MenuContext)

    let handleClick = (item,value) =>{

        setIndex(value)
        if(item && item==="Burgers"){
            setMenuTab(data.Burgers)
        } else if(item && item==="Drinks"){
            setMenuTab(data.Drinks)
        } else if(item && item==="Sides"){
            setMenuTab(data.Sides)
        }
    }

    function sentToCart(item){
        
        const currentItem = {"name":item.name,"price":item.price,"img":item.img}
        setCartItems(()=>[...CartItems,currentItem])
        
        
    }


    console.log(CartItems)
  
  
    return (
        <>
        <div className="menu">
            
         <div className="btn-container">
                {menuList.map((item,value)=>{
                    return(
                        <button className={`menu-list-btn ${value===tabIndex ? "active-btn": undefined}`} onClick={()=>handleClick(item,value)}>{item}</button>
                        )
                    })}
            </div>

            <div className="menu-items-container">
                {menuTab.map((item,value)=>{
                    return(
                        <div className="menu-item">
                            <div className="item-img">
                                <img src={item.image} alt="img"  className="product-photo"/>
                            </div>

                            <div className="item-info-section">
                                <div className="item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">$ {item.price.toFixed(2)} USD</p>
                                </div>
                                <p className="item-description">{item.description}</p>
                                
                                <div className="sent-to-cart">
                                    <TextField
                                        className="input"
                                        type="number"
                                        size="small"
                                        defaultValue ={1}
                                        
                                        InputProps={{ inputProps: { min: 0} }}
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                    />
                                    
                                    <button className="cart-btn" 
                                            onClick={()=>sentToCart(item)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        

        </div>
        </>

    )
}