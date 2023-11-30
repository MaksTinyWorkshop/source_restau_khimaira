import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ToggleContext } from "./hooks/ToogleContext";

const OverlayContact = () => {
  const ctx = useContext(ToggleContext);

  return ctx.isOpen ? (
    <>
      <div className="overlay" onClick={ctx.shut}></div>
      <div className="contact">
        <div className="item-container">
          <div className="icon-label">
            <FontAwesomeIcon icon={faPhone} color="#ECF3EC" />
            <span>&nbsp;Appelez-nous</span>
          </div>
          <p>02 99 65 04 93</p>
        </div>
        <div className="item-container">
          <div className="icon-label">
            <FontAwesomeIcon icon={faLocationDot} color="#ECF3EC" />
            <span>&nbsp;Trouvez-nous</span>
          </div>
          <p>5, Place du bas des Lices 35000 Rennes</p>
        </div>

        <div className="hours">
          <span>HORAIRES :</span>
          <p>12h - 14h // 19h30 - 22h</p>
          <p>Du mercredi au samedi</p>
        </div>
        <div className="closing">
          <p>Fermé le Dimanche, Lundi & Mardi</p>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default OverlayContact;
