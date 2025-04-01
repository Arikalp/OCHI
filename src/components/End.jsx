import React, { useEffect, useState } from "react";

const End = () => {
  const [deg, setdeg] = useState(0);

  useEffect(() => {
    const handleMouseMove = (dets) => {
      let x = dets.clientX;
      let y = dets.clientY;

      let delx = x - window.innerWidth / 2;
      let dely = y - window.innerHeight / 2;

      let angle = Math.atan2(dely, delx);
      let degree = (angle * 180) / Math.PI;
      setdeg(degree - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div data-scroll data-scroll-speed="-0.4" className="end-cont">
      {["Ready", "To start", "The project?"].map((item, index) => (
        <h1 className="Heading" key={index}>
          {item}
        </h1>
      ))}

      <button>START THE PROJECT <div></div></button>

      <div className="eyes-end">
        <div className="ballone">
          <div className="inner-ball">
            <div
              className="innerline"
              style={{
                transform: `rotate(${deg}deg)`,
              }}
            >
              <div className="white-ball"></div>
            </div>
          </div>
        </div>
        <div className="balltwo">
          <div className="inner-ball">
            <div
              className="innerline"
              style={{
                transform: `rotate(${deg}deg)`,
              }}
            >
              <div className="white-ball"></div>
            </div>
          </div>
        </div>
      </div>

            <div className="bye">
        <h3>Made with ❤️ by Sankalp</h3>
      </div>
    </div>
  );
};

export default End;
