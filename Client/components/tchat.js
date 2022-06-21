import React, { useState } from "react";
import io from "socket.io-client";

function Tchat() {
  const [messages, setMessages] = useState([]);
  const socket = io("localhost:3001");

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
  }

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
                  placeholder="Username"
                  className="form-control"
                />
                <br />
                <input
                  id="text"
                  type="text"
                  placeholder="Your message"
                  className="form-control"
                />
                <button type="submit">envoyer</button>
                {/* zfzfez */}
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tchat;
