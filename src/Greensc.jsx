import React from "react";

const Greensc = () => {
  return (
    <div data-scroll data-scroll-speed="-0.45" className="main-green">
      <h1 className="green-head">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>

      <div className="green-subcon">
        <div className="gfirst">
          <p>What you can expect:</p>
        </div>
        <div className="gsec">
          <p>
            We partner with the companies and startups who make the world go
            round — they drive the net-zero economy, revolutionize crypto
            treasury management, build photonic chips, and open Michelin-starred
            restaurants.
            <br />
            <br />
            <br /> We believe the mix of strategy and design (with a bit
            of coffee) is what makes your message clear, convincing, and
            captivating.
          </p>
        </div>
        <div className="gthir">
            <p>S:</p>
            <p>Instagram</p>
            <p>Behance</p>
            <p>Facebook</p>
            <p>Linkedin</p>
        </div>
      </div>

      <div className="green-imgcon">
        <div className="gifp">
            <h1>
                Our approach:
            </h1>
            <button>READ MORE</button>
        </div>
        <div className="gifs">
                <img src="src\assets\Green pic.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Greensc;
