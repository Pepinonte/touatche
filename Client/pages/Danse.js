import React from "react";
import StreamsCard from "../components/StreamsCard";
import Onglets from "../components/onglet";

const Dance = () => {
  return (
    <div>
      <Onglets />
      <div className="sinscrire inter-normal-black-30px">
        {" "}
        <a href="http://localhost:1234">Accueil</a>
      </div>
      <div>
        <StreamsCard
          channelName={"AikaMorii"}
          width={"800px"}
          height={"800px"}
        />
      </div>
    </div>
  );
};

export default Dance;
