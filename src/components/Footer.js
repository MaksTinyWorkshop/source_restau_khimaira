import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-separator"></div>
      <div className="footer-content">
        <div className="social">
          <a
            href="https://www.instagram.com/khimaira_restaurant/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#00387b", fontSize: "2.5rem" }}
              />
            </div>
            <p>SUIVEZ - NOUS</p>
          </a>
        </div>
        <div className="rights">
          <p>Khimaira © 2023 - Tous droits réservés </p>
          <div className="rights-box">
            <NavLink to="/legals">
              <p>Mentions légales</p>
            </NavLink>
            <p>Création & développement - Maxime Fleury </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
