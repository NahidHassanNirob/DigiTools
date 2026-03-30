import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stat from './components/Stat';
import Toggol from './components/Toggol';
import Cards from './components/Cards';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
const dataRes=async ()=>{
  const data=await fetch("/data.json");
  return data.json()
}
const dataRespons=dataRes();
const App = () => {
  return <>
  <NavBar></NavBar>
  <Banner></Banner>
  <Stat></Stat>
  <Toggol></Toggol>
  <Cards dataRespons={dataRespons}></Cards>
  <Steps></Steps>
  <Pricing></Pricing>
  </>;
};

export default App;