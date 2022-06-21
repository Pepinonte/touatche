import React from "react";
import AppMobileConnexion from "../AppMobileConnexion";
import "./Mobile.css";

function Mobile(props) {
  const {
    image4,
    titreSite,
    iconPaper_Plane,
    sport,
    sport_Ballon,
    musique,
    microphone_Png79302,
    thatre,
    thatre_Masque,
    danse,
    danse_Danseuse,
    irl,
    iconCamera,
    envoyer,
    carlusLul,
    carlusLulLulLulLul,
    carlusLulLulLul,
    carlusLulLulLulCringe,
    carlusZzzzzzzzzzzzzzzzzzzzzzzzzz1,
    carlusZzzzzzzzzzzzzzzzzzzzzzzzzz2,
    inputType,
    inputPlaceholder,
    appMobileConnexion1Props,
    appMobileConnexion2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mobile screen">
        <div className="overlap-group3">
          <div className="app__mobile-navbar">
            <div className="overlap-group1">
              <div className="overlap-group-1">
                <div className="app__mobile-navbar-login">
                  <AppMobileConnexion>{appMobileConnexion1Props.children}</AppMobileConnexion>
                  <AppMobileConnexion className={appMobileConnexion2Props.className}>
                    {appMobileConnexion2Props.children}
                  </AppMobileConnexion>
                </div>
                <img className="image-4" src={image4} />
              </div>
              <img className="titre-site-1" src={titreSite} />
            </div>
          </div>
          <img className="icon-paper_plane" src={iconPaper_Plane} />
        </div>
        <div className="app__mobile-categ">
          <div className="app__mobile-categ-1">
            <div className="sport-container">
              <div className="sport inter-normal-black-13px">{sport}</div>
              <img className="sport_ballon" src={sport_Ballon} />
            </div>
          </div>
          <div className="app__mobile-categ-1-1">
            <div className="overlap-group-2">
              <div className="musique inter-normal-black-13px">{musique}</div>
              <img className="microphone_png7930-2" src={microphone_Png79302} />
            </div>
          </div>
          <div className="app__mobile-categ-1-2">
            <div className="thatre-container">
              <div className="thatre inter-normal-black-13px">{thatre}</div>
              <img className="thatre_masque" src={thatre_Masque} />
            </div>
          </div>
          <div className="app__mobile-categ-1-3">
            <div className="danse-container">
              <div className="danse inter-normal-black-13px">{danse}</div>
              <img className="danse_danseuse" src={danse_Danseuse} />
            </div>
          </div>
          <div className="app__mobile-categ-1-4">
            <div className="overlap-group-3">
              <div className="irl inter-normal-black-13px">{irl}</div>
              <img className="icon-camera" src={iconCamera} />
            </div>
          </div>
        </div>
        <div className="app__mobile-tchat border-1px-black">
          <div className="app__mobile-container">
            <div className="app__mobile-tchat-tchatbar">
              <div className="frame-1"></div>
              <div className="envoyer">
                <div className="overlap-group-4">
                  <div className="envoyer-1 inter-normal-black-13px">{envoyer}</div>
                </div>
              </div>
            </div>
            <div className="app__mobile-tchat-divtchat border-1px-black">
              <div className="carlus-lul inter-normal-black-10px">{carlusLul}</div>
              <p className="carlus-lul-lul-lul-lul inter-normal-black-10px">{carlusLulLulLulLul}</p>
              <div className="carlus-lul-lul-lul inter-normal-black-10px">{carlusLulLulLul}</div>
              <p className="carlus-lul-lul-lul inter-normal-black-10px">{carlusLulLulLulCringe}</p>
              <div className="carlus-zzzzzzzzzzzzzzzzzzzzzzzzzz inter-normal-black-10px">
                {carlusZzzzzzzzzzzzzzzzzzzzzzzzzz1}
              </div>
              <div className="carlus-zzzzzzzzzzzzzzzzzzzzzzzzzz inter-normal-black-10px">
                {carlusZzzzzzzzzzzzzzzzzzzzzzzzzz2}
              </div>
              <input
                className="envoyer-un-message"
                name="envoyerunmessage"
                placeholder={inputPlaceholder}
                type={inputType}
              />
            </div>
            <div className="app__mobile-sondage">
              <div className="sondage"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
