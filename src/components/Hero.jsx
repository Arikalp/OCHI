import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import ochiLogo from '../assets/ochi.png';
import diagonalArrow from '../assets/diagonal-arrow.png';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div className="hero">
        {["We create", "Eye-opening", "Presentations"].map((text, index) => {
            if(index===1){
                return (
              <div key={index} className="hero-line">
                <motion.img 
                initial={{width:"0vw" }}
                animate={{ width: isMobile ? "20vw" : "10vw" }}  
                transition={{ duration: 1.5 ,ease: "easeInOut"}}
                src={ochiLogo} alt="ochi" className="hero-logo" />
                <h1>{text}</h1>
              </div>
            );
            }
            else{
                return <h1 key={index}>{text}</h1>;
            }
          
        })}
      </div>

      <div className="lowerhero">
        <p>For public and private companies</p>
        <p>From the first pitch to IPO</p>
        <button>START THE PROJECT <img src={diagonalArrow} alt="" className="button-arrow"/></button>
      </div>
    </>
  );
}

export default Hero;
