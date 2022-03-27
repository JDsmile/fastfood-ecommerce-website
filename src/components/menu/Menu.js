import React from "react";
import "./Menu.css";
import data from "../../data/menu.json";
import TextField from '@mui/material/TextField';
import { MenuContext } from "../../Contexts/MenuContext";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export default function Menu(){
    const [menuTab,setMenuTab] = React.useState(data.Burgers)
    const [tabIndex,setIndex] = React.useState(0)
    const menuList=["Burgers","Drinks","Sides"]
    const {CartItems,setCartItems} = React.useContext(MenuContext)
    const {productQuantity,setProductQuantity}= React.useContext(MenuContext)
    const [sucess,setSucess] = React.useState(undefined)
    const [showMessage,setShowMessage] = React.useState(false)
    const [index,setdIndex] = React.useState(0)


    const handleClick = (item,value) =>{
        setIndex(value)
        setShowMessage(()=>false)

        if(item && item==="Burgers"){
            setMenuTab(data.Burgers)
        } else if(item && item==="Drinks"){
            setMenuTab(data.Drinks)
        } else if(item && item==="Sides"){
            setMenuTab(data.Sides)
        }
    }

    const sentToCart=(item,value)=>{
        
        setdIndex(()=>value)

        setShowMessage(()=>true)
        const currentItem = {"name":item.name,"price":item.price,"img":item.image,"quantity":productQuantity}

        if (CartItems.find(product => product.name === item.name)) {
            setSucess((()=>false))
            
            return;
          }
          setCartItems([...CartItems, currentItem])
          setSucess(()=>true)
        //   setCheckDuplicate(()=>false)
    }
    
    return (
        <>
        <div className="menu">
            
         <div className="btn-container">
                {menuList.map((item,value)=>{
                    return(
                        <button className={`menu-list-btn ${value===tabIndex ? "active-btn": undefined}`} onClick={()=>handleClick(item,value)} key={value}>{item}</button>
                        )
                    })}
            </div>

            <div className="menu-items-container">
                {menuTab.map((item,value)=>{
                    return(
                        <div className="menu-item" key={value}>
                            <div className="item-img">
                                <img src={item.image} alt="img"  className="product-photo"/>
                            </div>

                            <div className="item-info-section">
                                <div className="item-info">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">$ {item.price.toFixed(2)}USD</p>
                                </div>

                                <p className="item-description">{item.description}</p>
                                <div className="sent-to-cart">          
                                    <button className="cart-btn" 
                                            onClick={()=>sentToCart(item,value)}>Add To Cart</button>

                                    <Alert variant="outlined" severity={sucess? "success": "error"}
                                    className="alert"
                                    style={{visibility : showMessage && index===value ?"visible" : "hidden"}}>
                                        
                                        {sucess ? "Product added" :"Duplicate item"}
                                            
                                        </Alert>
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