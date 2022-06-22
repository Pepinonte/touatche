import React, { useState } from "react";
import Tchat from "./tchat";
import "../styles/tchat.css";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";
import "../styles/tchat.css";

const OngletTchat = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="containerTchat">
      <div className="bloc-tabsTchat">
        <button
          id="btnParties"
          className={
            toggleState === 1 ? "tabsTchat active-tabsTchat" : "tabsTchat"
          }
          onClick={() => toggleTab(1)}
        >
          Tchat
        </button>
        <button
          id="btnPerso"
          className={
            toggleState === 2 ? "tabsTchat active-tabsTchat" : "tabsTchat"
          }
          onClick={() => toggleTab(2)}
        >
          Tchat Twitch
        </button>
      </div>

      <div className="content-tabsTchat">
        <div
          className={
            toggleState === 1
              ? "contentTchat  active-contentTchat"
              : "contentTchat"
          }
        >
          <Tchat />
        </div>

        <div
          className={
            toggleState === 2
              ? "contentTchat  active-contentTchat"
              : "contentTchat"
          }
        >
          <TwitchChat
            channel="gonni"
            theme="clean"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default OngletTchat;
