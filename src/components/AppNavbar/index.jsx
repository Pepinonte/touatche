import React from "react";
import "../AppNavbar/AppNavbar.css";
import logoTouatche from "../../img/logo_TouatheV4.png"
import nomTouatche from "../../img/Logo_Touatchev2.png"
import doublePoints from "../../img/doublePoints.png"
import Slogan from "../../img/slogan_Touatche.png"

function AppNavbar() {
  return (
    <div className="app_navbar">
      <img className="logo_-touathe-v4-1" src={logoTouatche} />
      <img className="titre-site" src={nomTouatche} />
      <img className="double-point" src={doublePoints} />
      <div className="overlap-group">
        <div className="app_navbar-login">
          <div className="app_navbar-connexion">
            <div className="connexion inter-normal-black-28px">Connexion</div>
          </div>
          <div className="app_navbar-inscription">
            <div className="sinscrire inter-normal-black-30px">S’inscrire</div>
          </div>
        </div>
        <img className="slogan_-touatche-1" src={Slogan} />
      </div>
    </div>
  );
}

export default AppNavbar;
