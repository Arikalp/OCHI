import React from "react";
import cardOne from '../assets/cardone.png';
import cardTwo from '../assets/cardtwo.png';
import cardThree from '../assets/cardthree.png';
import cardFour from '../assets/cardfour.png';

const Cards = () => {
  return (
    <div data-scroll data-scroll-speed="0.75" className="cards">
      <div className="cards-title">
        <h1>Featured Projects</h1>
      </div>

      <div className="cards-container">
        <div className="card-one img-con">
          <h1>SALIANCE LAB</h1>
          <img src={cardOne} alt="" />
        </div>
        <div className="card-two img-con">
            <h1>CARDBOARD SPACESHIP</h1>
          <img src={cardTwo} alt="" />
        </div>
        <div className="card-three img-con">
            <h1>AH2 & MATT HORN</h1>
            <img src={cardThree} alt="" />
        </div>
        <div className="card-four img-con">
            <h1>
                FYDE
            </h1>
          <img src={cardFour} alt="" />
        </div>
      </div>

      <button>VIEW ALL CASE STUDIES
        <div></div>
      </button>
    </div>
  );
};

export default Cards;
