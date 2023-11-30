import React from "react";
import BackButton from "../components/BackButton";

const Legals = () => {
  return (
    <main className="legals">
      <div className="top-box">
        <div className="top-title">
          <BackButton />
          <div className="title">
            <h1>MENTIONS LÉGALES</h1>
            <p>En vigueur au 25/11/2023</p>
          </div>
        </div>
        <div className="content">
          <p>
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            utilisateurs et visiteurs, ci-après l’ “Utilisateur", du site
            www.khimaira.fr , ci-après le "Site", les présentes mentions
            légales. La connexion et la navigation sur le Site par l’Utilisateur
            implique acceptation intégrale et sans réserve des présentes
            mentions légales. Ces dernières sont accessibles sur le Site à la
            rubrique « Mentions légales ».
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="subtitle">
          <h2>ARTICLE 1 - L'ÉDITEUR</h2>
        </div>
        <div className="content">
          <p>
            L'édition du Site est assurée par Khimaira SARL au capital de 6000
            euros, immatriculée au Registre du Commerce et des Sociétés de
            Rennes sous le numéro 919550921 dont le siège social est situé au 5
            Place du Bas des Lices, Numéro de téléphone 0299650493, Adresse
            e-mail : khimaira@gmail.com. N° de TVA intracommunautaire :
            FR32919550921 Le Directeur de la publication est Pannagas Sétphane
            ci-après l'"Editeur".
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="subtitle">
          <h2>ARTICLE 2 - L'HÉBERGEUR</h2>
        </div>
        <div className="content">
          <p>
            L'hébergeur du Site est la société Hostinger, dont le siège social
            est situé au Švitrigailos str. 34, Vilnius 03230 Lithuania , avec le
            numéro de téléphone : +37064503378{" "}
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="subtitle">
          <h2>ARTICLE 3 - ACCÈS AU SITE</h2>
        </div>
        <div className="content">
          <p>
            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d’une nécessité de maintenance. En cas de modification, interruption
            ou suspension du Site, l'Editeur ne saurait être tenu responsable.
          </p>
        </div>
      </div>
      <div className="content-box">
        <div className="subtitle">
          <h2>ARTICLE 4 - COLLECTE DES DONNÉES</h2>
        </div>
        <div className="content">
          <p>
            Le site est exempté de déclaration à la Commission Nationale
            Informatique et Libertés (CNIL) dans la mesure où il ne collecte
            aucune donnée concernant les utilisateurs.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Legals;
