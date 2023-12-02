import React from "react";
import { isMobile } from "react-device-detect";

const OverlayMenuExample = ({ closeModal }) => {
  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="example-menu">
        <div className="separator" onClick={closeModal}></div>
        <div className="content-box" onClick={isMobile && closeModal}>
          <div className="title-part">
            <h2>L'eau à la bouche !</h2>
            <p>
              Pour vous mettre en appétit, voici un exemple de menu Dégustation
              en Cinq Temps...
            </p>
          </div>
          <div className="main-content">
            <div className="item">
              <span>Première entrée :</span>
              <p>Raviole Porc-crevette / Tom Yam Kung / Shiitake</p>
            </div>
            <div className="item">
              <span>Deuxième entrée :</span>
              <p>Haricots verts / Brebis / Framboise</p>
            </div>
            <div className="item">
              <span>Poisson :</span>
              <p>Thonine au binchotan / Tomate-Shimeji / Huile de crevette</p>
            </div>
            <div className="item">
              <span>Viande :</span>
              <p>Selle d’agneau / Baba ganousch / Jus d’agneau au carvi</p>
            </div>
            <div className="item">
              <span>Dessert :</span>
              <p>Cheveux d'ange / Glace miel-thym / Fraise / Verveine</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverlayMenuExample;
