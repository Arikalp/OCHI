import React from "react";

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
                <img src="src\assets\ochi.png" alt="ochi" style={imageStyle} />
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
        <button>START THE PROJECT <img src="src\assets\diagonal-arrow.png" alt="" width='20
        vw'/></button>
      </div>
    </>
  );
}

export default Hero;
