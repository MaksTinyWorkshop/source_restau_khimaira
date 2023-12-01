import React, { useEffect } from "react";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  // Creating functions to Animate
  const boxAnim = (elem, depart, delay, duration) => {
    gsap.fromTo(
      elem,
      { x: depart },
      {
        x: 0,
        delay: delay || 0.6,
        duration: duration || 0.8,
        ease: "bounce.out",
      }
    );
  };

  const carouselAnim = (elem, duration, delay) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: duration || 1,
        delay: delay || 1,
      }
    );
  };

  const bottomBoxAnim = () => {
    gsap.fromTo(
      ".dynamic-p",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".bottom-box",
          start: "80% bottom",
          toggleActions: "restart none none reset",
        },
      }
    );
  };

  // Animate once Loaded
  useEffect(() => {
    boxAnim("#box-1", -400);
  }, []);
  useEffect(() => {
    boxAnim("#box-2", 400);
  }, []);
  useEffect(() => {
    carouselAnim(".carrousel-box", 1, 1.2);
  }, []);
  useEffect(() => {
    bottomBoxAnim();
  }, []);

  return (
    <section className="section-1">
      <div id="box-1" className="box">
        <p>
          Nous avons le plaisir de vous accueillir au sein de notre restaurant{" "}
          <b>au coeur de Rennes</b> afin de partager avec vous notre vision de
          la cuisine.
        </p>
        <div className="carrousel-box">
          <Carousel1 />
        </div>
      </div>
      <div id="box-2" className="box">
        <p>
          <strong>Une cuisine Libre</strong> et de saison, servie par 3 copains
          qui vous proposent un menu <b>tout en surprise</b> avec des{" "}
          <b>produits locaux</b>.
        </p>
        <div className="carrousel-box">
          <Carousel2 />
        </div>
      </div>
      <div className="bottom-box">
        <p className="dynamic-p">
          Laissez-vous surprendre par notre cuisine, nos vins, nos saveurs et
          notre bonne humeur !
        </p>
      </div>
    </section>
  );
};

export default Section1;
