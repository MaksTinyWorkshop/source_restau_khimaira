import React, { useContext } from "react";
import { Sling as Hamburger } from "hamburger-react";
import OverlayContact from "./OverlayContact";
import { ToggleContext } from "./hooks/ToogleContext";

const Header = () => {
  const ctx = useContext(ToggleContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="logo" onClick={scrollToTop}>
        <div className="logo-box"></div>
        <p>Cuisine Libre</p>
      </div>
      <div className="hamburger-menu">
        <Hamburger
          toggled={ctx.isOpen}
          toggle={ctx.toggle}
          size={30}
          easing="ease-out"
          duration={0.2}
          rounded
          direction="left"
          color="#eec8a4"
        />
      </div>
      <OverlayContact />
    </header>
  );
};

export default Header;
