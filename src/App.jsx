import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Motiont } from './components/Motiont'
import Greensc from './Greensc'
import { Balls } from './components/Balls'
import Cards from './components/Cards'
import End from './components/End'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Motiont/>
      <Greensc/>
      <Balls/>
      <Cards/>
      <End/>
    </div>
  )
}

export default App