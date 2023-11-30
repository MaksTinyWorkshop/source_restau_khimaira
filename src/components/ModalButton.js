import React, { useEffect, useState } from "react";
import OverlayMenuExample from "./OverlayMenuExample";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import { gsap } from "gsap";

function ModalButton() {
  // Function to make the button spin
  const animButton = () => {
    gsap.to(".btn-modal", {
      rotate: 360,
      duration: 3,
      repeat: -1,
      repeatDelay: 1,
      ease: "power1.inOut",
    });
  };

  // Function to display the overlay, or not
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    animButton();
  }, []);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn-modal">
        <FontAwesomeIcon icon={faStar} color="#eec8a4" size="2xl" />
      </button>
      {showModal &&
        createPortal(
          <OverlayMenuExample closeModal={() => setShowModal(false)} />,
          document.body,
          (document.body.style.overflowy = "hidden")
        )}
    </>
  );
}

export default ModalButton;
