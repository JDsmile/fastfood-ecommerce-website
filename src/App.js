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



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='order' element={<Order />}></Route>
          <Route path='company' element={<Company />}></Route>
          <Route path='faq' element={<FAQ />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
