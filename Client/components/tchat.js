import React, { useState } from "react";
import io from "socket.io-client";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Tchat() {
  const [messages, setMessages] = useState([]);
  const socket = io("localhost:3001");
  const [value, setValue] = useState("ddqdqz");
  function handleChange(e) {
    this.setState({ value: e.target.value });
  }

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  socket.on("SERVER_MSG", (msg) => {
    setNewMessage(msg);
  });

  function setNewMessage(msg) {
    setMessages([...messages, msg]);
  }

  function sendMessage(e) {
    e.preventDefault();
    console.log("test" + { transcript });
    const msg = {
      username: e.target.username.value,
      text: e.target.text.value,
    };
    socket.emit("CLIENT_MSG", msg);
    setNewMessage(msg);
    // e.target.user.value = { transcript };
    setMessage({ transcript });
  }

  // function sendAll(e){
  //   sendMessage(e);
  //   console.log();
  //   setNewMessage(transcript);
  // }

  return (
    <div>
      <div className="app_tchat border-1px-black">
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
            <form onSubmit={(e) => sendMessage(e)}>
              <div className="app_tchatbar">
                <input
                  id="username"
                  type="text"
                  placeholder="Votre pseudonyme"
                  className="form-control"
                  required
                />
                <br />
                <input
                  onChange={this.handleChange}
                  contentEditable="true"
                  id="text"
                  type="text"
                  placeholder="Entrez votre message"
                  className="form-control"
                  required
                ></input>
                <button type="submit">envoyer</button>
              </div>
            </form>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={resetTranscript}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tchat;
