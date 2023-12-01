import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin needed to use the GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Function to simulate the "writing" of my h2
const AnimatedTitle = () => {
  const titleAnim = () => {
    gsap.fromTo(
      ".letter",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.05,

        scrollTrigger: {
          trigger: ".title-box",
          start: "bottom bottom",
          toggleActions: "restart none none reset",
        },
      }
    );
  };

  // Play once mounted
  useEffect(() => {
    titleAnim();
  }, []);

  return (
    <>
      <div className="title-box">
        <h2>Fermez les yeux,</h2>
        <h2>ouvrez la bouche...</h2>
        <h2>
          <span className="letter">O</span>
          <span className="letter">n</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">s</span>
          <span className="letter">'</span>
          <span className="letter">o</span>
          <span className="letter">c</span>
          <span className="letter">c</span>
          <span className="letter">u</span>
          <span className="letter">p</span>
          <span className="letter">e</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">d</span>
          <span className="letter">e</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">t</span>
          <span className="letter">o</span>
          <span className="letter">u</span>
          <span className="letter">t</span>
          <span className="letter">&nbsp;</span>
          <span className="letter">!</span>
        </h2>
      </div>
    </>
  );
};

export default AnimatedTitle;
