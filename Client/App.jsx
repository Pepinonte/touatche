import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Mobile from "./components/Mobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|computeur)">
          <div className="container-center-horizontal">
            <div className="computeur screen">
              <div className="app_navbar-container">
                //ui
                <AppNavbar />
                <AppNavbar />
              </div>
              <div className="app_categ inter-normal-black-32px">
                <div className="app_categ-1">
                  <h1 className="title">Sport</h1>
                  <img className="sport_ballon-1" src="/img/sport-ballon@2x.png" />
                </div>
                <div className="app_categ-2">
                  <div className="musique-1">Musique</div>
                  <img className="microphone_png7930-1" src="/img/microphone-png7930-1-1@2x.png" />
                </div>
                <div className="app_categ-3">
                  <div className="thatre-1">Théatre</div>
                  <img className="thatre_masque-1" src="/img/th-atre-masque@2x.png" />
                </div>
                <div className="onglet-danse">
                  <div className="app_categ-4">
                    <div className="danse-1 inter-normal-black-32px">Danse</div>
                    <img className="danse_danseuse-1" src="/img/danse-danseuse@2x.png" />
                  </div>
                </div>
                <div className="onglet-irl">
                  <div className="app_categ-5">
                    <div className="irl-1 inter-normal-black-32px">IRL</div>
                    <img className="icon-camera-1" src="/img/image-2-1@2x.png" />
                  </div>
                </div>
              </div>
              <div className="app_-container">
                <div className="app_soudage">
                  <div className="sondage-1 inter-normal-black-32px">Sondage :</div>
                  <div className="overlap-group-5">
                    <div className="envoyer-2">Envoyer</div>
                  </div>
                </div>
                <div className="app_tchat border-1px-black">
                  <div className="app_tchat-container">
                    <div className="app_tchat-historique inter-normal-black-20px">
                      <div className="name-1">Dylan :&nbsp;&nbsp; ...</div>
                      <div className="name-2">Nicolas B :&nbsp;&nbsp;Mais c’est vrai</div>
                      <div className="name">Nicolas B :&nbsp;&nbsp;Déso BG</div>
                      <div className="name">Dylan :&nbsp;&nbsp; Ca c’est vraiment pas gentil !!</div>
                      <div className="name-3">Nicolas B :&nbsp;&nbsp; T’as pas souvent dut l’entendre alors ...</div>
                      <div className="name-4">Dylan :&nbsp;&nbsp;Je sais, je sais, on me le dit souvent</div>
                      <div className="name">Nicolas B :&nbsp;&nbsp;En effet, tu es vraiment pas bête mec</div>
                      <div className="name-5">Dylan :&nbsp;&nbsp;Il ne faut pas juger un livre à sa couverture</div>
                      <div className="name-6">
                        Nicolas B :&nbsp;&nbsp;Bon ça va, je savais pas à quel point c’était bien avant de vraiment
                        tester :/
                      </div>
                      <div className="name-7">Christian :&nbsp;&nbsp;Faut savoir ...</div>
                      <div className="name-8">
                        Nicolas B :&nbsp;&nbsp;Ah non, autant pour moi c’est vraiment bien enfait
                      </div>
                      <div className="name-9">Nicolas B :&nbsp;&nbsp;React, c’est nul</div>
                      <div className="name-10">Christian :&nbsp;&nbsp;L’API marche pas</div>
                      <div className="name">Dylan : Trop bien ton live</div>
                      <div className="name-11">Nicolas : Je vais faire le logo</div>
                    </div>
                    <div className="app_tchat-edition">
                      <div className="app_tchatbar">
                        <input
                          className="envoyer-un-message-1"
                          name="envoyerunmessage"
                          placeholder="Envoyer un message "
                          type="text"
                        />
                      </div>
                      <div className="app_envoyer">
                        <div className="envoyer_text inter-normal-black-20px">Envoyer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/mobile">
          <Mobile {...mobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const appMobileConnexion1Data = {
    children: "Connexion",
};

const appMobileConnexion2Data = {
    children: "Inscription",
    className: "app__mobile-inscription",
};

const mobileData = {
    image4: "/img/image-4@2x.png",
    titreSite: "/img/titre-site@2x.png",
    iconPaper_Plane: "/img/image-3@2x.png",
    sport: "Sport",
    sport_Ballon: "/img/sport-ballon@2x.png",
    musique: "Musique",
    microphone_Png79302: "/img/microphone-png7930-2@2x.png",
    thatre: "Théatre",
    thatre_Masque: "/img/th-atre-masque@2x.png",
    danse: "Danse",
    danse_Danseuse: "/img/danse-danseuse@2x.png",
    irl: "IRL",
    iconCamera: "/img/image-3-1@2x.png",
    envoyer: "Envoyer",
    carlusLul: "Carlus: Lul",
    carlusLulLulLulLul: "Carlus: Lul Lul Lul Lul",
    carlusLulLulLul: "Carlus: Lul Lul Lul",
    carlusLulLulLulCringe: "Carlus: Lul Lul Lul cringe",
    carlusZzzzzzzzzzzzzzzzzzzzzzzzzz1: "Carlus: zzzzzzzzzzzzzzzzzzzzzzzzzz",
    carlusZzzzzzzzzzzzzzzzzzzzzzzzzz2: "Carlus: zzzzzzzzzzzzzzzzzzzzzzzzzz",
    inputType: "text",
    inputPlaceholder: "Envoyer un message ",
    appMobileConnexion1Props: appMobileConnexion1Data,
    appMobileConnexion2Props: appMobileConnexion2Data,
};

