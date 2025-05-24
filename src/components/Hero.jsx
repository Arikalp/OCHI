import { motion } from "framer-motion";
import React from "react";
import ochiLogo from '../assets/ochi.png';
import diagonalArrow from '../assets/diagonal-arrow.png';

function Hero() {

    const imageStyle = {
    width: "10vw",
    height: "5vw",
    borderRadius: "5%",
  };

  return (
    <>
      <div className="hero">
        {["We create", "Eye-opening", "Presentations"].map((text, index) => {
            if(index===1){
                return (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <motion.img 
                initial={{width:"0vw" }}
                animate={{ width:"10vw" }}  
                transition={{ duration: 1.5 ,ease: "easeInOut"}}
                src={ochiLogo} alt="ochi" style={imageStyle}  />
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
        <button>START THE PROJECT <img src={diagonalArrow} alt="" width='20vw'/></button>
      </div>
    </>
  );
}

export default Hero;
