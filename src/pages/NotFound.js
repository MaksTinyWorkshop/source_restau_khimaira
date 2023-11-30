import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import gsap from "gsap";
const NotFound = () => {
  const titleAnim = () => {
    gsap.fromTo(
      ".nf-box>h2",
      {
        opacity: 0,
        y: -300,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  };

  useEffect(() => {
    titleAnim();
  }, []);
  return (
    <>
      <div className="nf-box">
        <h2>Il semblerait que la page que vous recherchez n'existe pas</h2>
        <p>Il vaut mieux revenir en arrière...</p>
        <BackButton />
      </div>
    </>
  );
};

export default NotFound;
