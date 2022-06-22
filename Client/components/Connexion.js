import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/Inscription.css";

function Connexion() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    localStorage.setItem("nom", name);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            alert(`coucou ${name}`);
          }}
        >
          <h3> Connexion </h3>
          <label>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Connexion;
