import React, { useState } from "react";
import io from "socket.io-client";
import "../styles/tchat.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Tchat() {
  const [messages, setMessages] = useState([]);
  const socket = io("localhost:3001");
  const [toggleTchat, setToggleTchat] = useState(1);

  const toggleTchatV = (index) => {
    setToggleTchat(index);
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  socket.on("SERVER_MSG", (msg) => {
    setNewMessage(msg);
  });

  function setNewMessage(msg) {
    setMessages([...messages, msg]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const msg = {
      username: e.target.username.value,
      text: e.target.text.value,
    };
    socket.emit("CLIENT_MSG", msg);
    setNewMessage(msg);
    // e.target.user.value = { transcript };
  }
  function sendMessageVocal(e) {
    e.preventDefault();
    const msg = {
      username: e.target.username.value,
      text: e.target.vocal.value,
    };
    socket.emit("CLIENT_MSG", msg);
    setNewMessage(msg);
    // e.target.user.value = { transcript };
  }

  // function sendAll(e){
  //   sendMessage(e);
  //   console.log();
  //   setNewMessage(transcript);
  // }

  return (
    <div>
      <div className="app_categ inter-normal-black-32px">
        <div className="app_categ-1">
          <a href="http://localhost:1234/Sport">Sport</a>
          <img className="sport_ballon-1" src="/img/sport-ballon@2x.png" />
        </div>
        <div className="app_categ-2">
          <div className="musique-1">
            <a href="http://localhost:1234/Musique">Musique</a>
          </div>
          <img
            className="microphone_png7930-1"
            src="/img/microphone-png7930-1-1@2x.png"
          />
        </div>
        <div className="app_categ-3">
          <div className="thatre-1">
            <a href="http://localhost:1234/Theatre">Théatre</a>
          </div>
          <img className="thatre_masque-1" src="/img/th-atre-masque@2x.png" />
        </div>
        <div className="onglet-danse">
          <div className="app_categ-4">
            <div className="danse-1 inter-normal-black-32px">
              <a href="http://localhost:1234/Danse">Danse</a>
            </div>
            <img
              className="danse_danseuse-1"
              src="/img/danse-danseuse@2x.png"
              // test
            />
          </div>
        </div>
        <div className="onglet-irl">
          <div className="app_categ-5">
            <div className="irl-1 inter-normal-black-32px">
              <a href="http://localhost:1234/Irl">IRL</a>
            </div>
            <img className="icon-camera-1" src="/img/image-2-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tchat;
