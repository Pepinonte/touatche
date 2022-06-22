import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Mobile from "./components/Mobile";
import Tchat from "./components/tchat";
import StreamsCard from "./components/StreamsCard";
import Sondage from "./components/testNico";
import Danse from "./pages/Danse";
import Irl from "./pages/Irl";
import Musique from "./pages/Musique";
import Sport from "./pages/Sport";
import Theatre from "./pages/Theatre";
import Connexion from "./components/Connexion";
import Onglets from "./components/onglet";
import Inscription from "./components/Inscription";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";
import Tchat from "./components/tchat";
import OngletTchat from "./components/OngletTchat";
// import RecordVoice from "./components/voiceRecorder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|computeur)">
          <div className="container-center-horizontal">
            <div className="computeur screen">
              <div className="app_navbar-container">
                <AppNavbar />
                <AppNavbar />
              </div>
              <Onglets />
              <div className="app_-container">
                <div className="app_player">
                  <TwitchPlayer className="vidéoBase" channel="gonni" />
                </div>
                <div className="app_soudage">
                  <div className="sondage-1 inter-normal-black-32px">
                    Sondage : <Sondage />
                  </div>
                  <div className="overlap-group-5">
                    <div className="envoyer-2">Envoyer</div>
                  </div>
                </div>
                <div className="app-tchat">
                  <OngletTchat />
                </div>
              </div>
            </div>
          </div>
        </Route>

        <Route path="/mobile">
          <Mobile {...mobileData} />
        </Route>
        <Route path="/StreamsCard">
          <StreamsCard channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>

        <Route path="/Sport">
          <Sport channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>

        <Route path="/Danse">
          <Danse channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>

        <Route path="/Theatre">
          <Theatre channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>
        <Route path="/Irl">
          <Irl channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>
        <Route path="/Musique">
          <Musique channelName={"gonni"} width={"800px"} height={"800px"} />
        </Route>

        <Route path="/Connexion">
          <Connexion />
        </Route>

        <Route path="/Inscription">
          <Inscription />
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
