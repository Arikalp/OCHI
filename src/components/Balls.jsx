import React, { useEffect, useState } from "react";

export const Balls = () => {
    const [deg, setdeg] = useState(0);

    useEffect(() => {
        const handleMouseMove = (dets) => {
            let x = dets.clientX;
            let y = dets.clientY;

            let delx = x - window.innerWidth / 2;
            let dely = y - window.innerHeight / 2;

            let angle = Math.atan2(dely, delx);
            let degree = angle * 180 / Math.PI;
            setdeg(degree-180);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div data-scroll data-scroll-speed="-0.5" className="balls-container">
                <img src="src/assets/balls img.jpg" alt="" />
            </div>
            <div data-scroll data-scroll-speed="-0.65" className="eyes">
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
                <div  className="balltwo">
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
        </>
    );
};
