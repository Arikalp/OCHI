import React from 'react'
import { motion } from 'framer-motion'
export const Motiont = () => {
  return (
    <div data-scroll data-scroll-speed="0.25"  className='motiont '> 
    <motion.div 
    initial={{ x:0}}
    animate={{ x:"-200%" }}
    transition={{ ease: "linear",repeat: Infinity, duration:30 }}    

    className='motioncon'>
        <h1>We are ochi</h1>
        <h1>We are ochi</h1>
        <h1>We are ochi</h1>
    </motion.div>
    </div>
  )
} 

