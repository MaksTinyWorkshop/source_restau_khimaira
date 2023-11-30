import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel2 = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={true}
        transitionTime={500}
      >
        <div>
          <img src="./assets/img/C_1_1.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_1_2.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_1_3.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_1_4.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_1_5.jpeg" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default Carousel2;
