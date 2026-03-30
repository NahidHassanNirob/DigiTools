import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stat from './components/Stat';
import Toggol from './components/Toggol';
import Cards from './components/Cards';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
const dataRes=async ()=>{
  const data=await fetch("/data.json");
  return data.json()
}
const dataRespons=dataRes();
const App = () => {
  const [toggol,setToggol]=useState("products")
  const [cart,setCart]=useState([])
  console.log(cart);
  return <>
  <NavBar></NavBar>
  <Banner></Banner>
  <Stat></Stat>
  <Toggol cart={cart} setCart={setCart} toggol={toggol} setToggol={setToggol}></Toggol>
  {
    toggol==="products"?  <Cards cart={cart} setCart={setCart} dataRespons={dataRespons}></Cards> :<Cart cart={cart} setCart={setCart}></Cart>
  }
 
  
  <Steps></Steps>
  <Pricing></Pricing>
  <CtaSection></CtaSection>
  <Footer></Footer>
  </>;
};

export default App;