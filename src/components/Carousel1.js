import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Using the React-responsive-carousel

const Carousel1 = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={2800}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        stopOnHover={true}
        transitionTime={500}
        axis="vertical"
      >
        <div>
          <img src="./assets/img/C_2_1.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_2_2.jpeg" alt="" />
        </div>
        <div>
          <img src="./assets/img/C_2_3.jpeg" alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default Carousel1;
