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

    console.log(msg);
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

    console.log(msg);

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
      <div className="app_tchat-container">
        <div className="app_tchat-historique inter-normal-black-20px">
          {messages.map((msg) => {
            return (
              <div key={true}>
                {msg.username}: {msg.text}
              </div>
            );
          })}
        </div>
        <div className="app_tchat-edition">
          <form
            className="formLeTchat"
            onSubmit={
              toggleTchat === 2
                ? (e) => sendMessageVocal(e)
                : (e) => sendMessage(e)
            }
          >
            <div className="app_tchatbar">
              <input
                id="username"
                type="text"
                placeholder="Votre pseudonyme"
                className="form-control"
                value={localStorage.getItem("nom")}
                required
              />
              <br />
              <input
                id="text"
                type="text"
                placeholder="Entrez votre message"
                className={
                  toggleTchat === 1
                    ? "TchatContent activeTchatContent"
                    : "TchatContent"
                }
              ></input>
              <input
                id="vocal"
                type="text"
                value={transcript}
                placeholder="Entrez votre message"
                className={
                  toggleTchat === 2
                    ? "TchatContent activeTchatContent"
                    : "TchatContent"
                }
              ></input>
              <input
                type="submit"
                className="envoyerMessage"
                value="Envoyer"
              ></input>
            </div>
          </form>
          <button
            className={toggleTchat === 1 ? "Tchat activeTchat" : "Tchat"}
            onClick={() => {
              toggleTchatV(1);
            }}
            data-anim="1"
          >
            Texte
          </button>

          <button
            className={toggleTchat === 2 ? "Tchat activeTchat" : "Tchat"}
            onClick={() => {
              toggleTchatV(2);
            }}
            data-anim="2"
          >
            Vocal
          </button>
          <button
            className={
              toggleTchat === 2
                ? "TchatContent activeTchatContent"
                : "TchatContent"
            }
            onClick={SpeechRecognition.startListening}
          >
            🎙️​
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tchat;
