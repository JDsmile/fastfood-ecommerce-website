import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./pages/Home/Home"
import Order from "./pages/Order/Order"
import Company from "./pages/Company/Company"
import FAQ from "./pages/FAQ/Faq"
import Header from "./components/Header/Header"
import "./App.css"
import { MenuContext } from './Contexts/MenuContext';
import { NavLink } from 'react-router-dom'



  function App() {

    //get cart items from local storage
    // function retriveData(){
    //   const localData = localStorage.getItem("cart")
    //   return localData && JSON.parse(localData) 
    // }

    const [CartItems,setCartItems]=React.useState([])
    const [productQuantity,setProductQuantity]= React.useState(1)
    const [itemIndex,setItemIndex] = React.useState()

    //save cart items to localstorage
    // React.useEffect(()=>{
    //   localStorage.setItem("cart" , JSON.stringify(CartItems))
    // },[CartItems])

    return (
   
    <Router basename="fastfood-ecommerce-website">
    
      <div className="App">
        <MenuContext.Provider value={{CartItems,setCartItems,productQuantity,setProductQuantity,itemIndex,setItemIndex}}>
          <Header/>
          <Routes>

            <Route path='/' element={<Home/>}></Route>
            <Route path='order' element={<Order />}></Route>
            <Route path='company' element={<Company />}></Route>
            <Route path='faq' element={<FAQ />}></Route>
          </Routes>
        </MenuContext.Provider>
      </div>
    </Router>
  );
}

export default App;
