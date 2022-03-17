import React from "react";
import "./Menu.css";
import data from "../../data/menu.json";
import TextField from '@mui/material/TextField';


export default function Menu(){
    const [menuTab,setMenuTab] = React.useState(data.Burgers)

    const menuList=["Burgers","Drinks","Sides"]
    
    let handleClick = (value) =>{
        if(value && value==="Burgers"){
            setMenuTab(data.Burgers)
        } else if(value && value==="Drinks"){
            setMenuTab(data.Drinks)
        } else if(value && value==="Sides"){
            setMenuTab(data.Sides)
        }
    }
  
    return (
        <>
        
        <div className="menu">

            {menuList.map((item,value)=>{
                return(
                    <button className="menu-list-btn" onClick={()=>handleClick(item)}>{item}</button>
                )
            })}
        
            {menuTab.map((item,value)=>{
                return(
                    

                    <div className="menu-item">
                        <div className="item-img">
                            <img src={item.image} alt="img"  className="product-photo"/>
                        </div>

                        <div className="item-info-section">
                            <div className="item-info">
                                <p className="item-name">{item.name}</p>
                                <p className="item-price">$ {item.price} USD</p>
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
                                
                                <button className="cart-btn">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
        </>

    )
}