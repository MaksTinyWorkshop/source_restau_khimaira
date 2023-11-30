import React from "react";
import { NavLink } from "react-router-dom";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = () => {
  return (
    <NavLink to="/">
      <div className="back-button">
        <FontAwesomeIcon
          icon={faRotateLeft}
          style={{ color: "#727985", fontSize: "1.5rem" }}
        />
      </div>
    </NavLink>
  );
};

export default BackButton;
