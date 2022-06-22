  import React from "react";
  import "./AppNavbar.css";

  function AppNavbar() {
    return (
      <div className="app_navbar">
        <img className="logo_-touathe-v4-1" src="/img/logo-touathev4-1@2x.png" />
        <img className="titre-site" src="/img/titre-site-1@2x.png" />
        <img className="double-point" src="/img/doublepoint@2x.png" />
        <div className="overlap-group">
          <div className="app_navbar-login">
            <div className="app_navbar-connexion">
              <div className="connexion inter-normal-black-28px"> <a href="http://localhost:1234/Connexion">Connexion</a></div>
            </div>
            <div className="app_navbar-inscription">
              <div className="sinscrire inter-normal-black-30px"> <a href="http://localhost:1234/Inscription">Inscription</a></div>
            </div>
          </div>
          <img className="slogan_-touatche-1" src="/img/slogan-touatche-1@1x.png" />
        </div>
      </div>
    );
  }

  export default AppNavbar;
