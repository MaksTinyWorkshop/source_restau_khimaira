import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  const scaleAnim = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        scale: 10,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        delay: delay || 0.4,
        duration: duration || 0.6,
      }
    );
  };

  useEffect(() => {
    scaleAnim(".hero>h1", 1);
  }, []);

  return (
    <>
      <div className="hero">
        <h1 id="h1">Bienvenue chez Khimaira</h1>
      </div>
      <div className="after-box"></div>
    </>
  );
};

export default Hero;
