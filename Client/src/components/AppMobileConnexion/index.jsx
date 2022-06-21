import React from "react";
import "./AppMobileConnexion.css";

function AppMobileConnexion(props) {
  const { children, className } = props;

  return (
    <div className={`app__mobile-connexion ${className || ""}`}>
      <div className="connexion-1 inter-normal-black-10px">{children}</div>
    </div>
  );
}

export default AppMobileConnexion;
