import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Motiont } from './components/Motiont'
import Greensc from './Greensc'
import { Balls } from './components/Balls'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Motiont/>
      <Greensc/>
      <Balls/>
    </div>
  )
}

export default App