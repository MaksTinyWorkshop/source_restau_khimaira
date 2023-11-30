import React from "react";
import ModalButton from "./ModalButton";
import AnimatedTitle from "./AnimatedTitle";

const Section2 = () => {
  return (
    <section className="section-2">
      {/* The animation is handled by the AnimatedTitle itself */}
      <AnimatedTitle />
      <div className="menus-container">
        <div className="menu">
          <div className="separator-1"></div>
          <div className="menu-box">
            <h4>Menu du midi</h4>
            <div className="item-box">
              <p className="menu-list">Entrée + plat ou Plat + dessert</p>
              <p>22€</p>
            </div>
            <div className="item-box">
              <p className="menu-list">Entrée + Plat + Dessert</p>
              <p>26€</p>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu-box">
            <ModalButton />
            <h4>Menu du soir</h4>
            <div className="item-box">
              <p className="menu-list">Dégustation en cinq temps</p>
              <p>52€</p>
            </div>
            <div className="description-box">
              <p>
                Première entrée / Deuxième entrée / Poisson / Viande / Dessert
              </p>
            </div>
          </div>
          <div className="separator-2"></div>
        </div>
      </div>
      <div className="bottom-box">
        <p>
          Pour accompagner votre repas du soir vous sera proposé un accord mets
          & vins pour un supplément de 28€.
        </p>
      </div>
    </section>
  );
};

export default Section2;
