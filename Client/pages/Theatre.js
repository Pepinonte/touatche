import React from "react";
import StreamsCard from "../components/StreamsCard";
import Onglets from "../components/onglet";
const Theatre = () => {
  return (
    <div>
      <div>
        <Onglets />
        <div className="sinscrire inter-normal-black-30px">
          {" "}
          <a href="http://localhost:1234">Accueil</a>
        </div>
      </div>
      <div>
        <StreamsCard channelName={"vcrtube"} width={"800px"} height={"800px"} />
      </div>
    </div>
  );
};

export default Theatre;
