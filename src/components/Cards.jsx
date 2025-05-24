import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="0.75" className="cards">
      <div className="cards-title">
        <h1>Featured Projects</h1>
      </div>

      <div className="cards-container">
        <div className="card-one img-con">
          <h1>SALIANCE LAB</h1>
          <img src="public/assets/cardone.png" alt="" />
        </div>
        <div className="card-two img-con">
            <h1>CARDBOARD SPACESHIP</h1>
          <img src="public/assets/cardtwo.png" alt="" />
        </div>
        <div className="card-three img-con">
            <h1>AH2 & MATT HORN</h1>
            <img src="public/assets/cardthree.png" alt="" />
        </div>
        <div className="card-four img-con">
            <h1>
                FYDE
            </h1>
          <img src="public/assets/cardfour.png" alt="" />
        </div>
      </div>

      <button>VIEW ALL CASE STUDIES
        <div></div>
      </button>
    </div>
  );
};

export default Cards;
