import React from "react";
import StreamsCard from "../components/StreamsCard";
import "../styles/Musique.css";
import Onglets from "../components/onglet";

const Musique = () => {
  return (
    <div>
      <div>
        <Onglets />
        <div className="app_navbar-inscription">
          <div className="sinscrire inter-normal-black-30px">
            {" "}
            <a href="http://localhost:1234">Accueil</a>
          </div>
        </div>
      </div>

      <div className="m1">
        <StreamsCard
          channelName={"LeekBeats"}
          width={"800px"}
          height={"800px"}
        />
      </div>
      <div>
        <StreamsCard
          className="m2"
          channelName={"AnimeVibesRadio"}
          width={"800px"}
          height={"800px"}
        />
      </div>
      <div>
        <StreamsCard
          className="m3"
          channelName={"ulfa_yuv"}
          width={"800px"}
          height={"800px"}
        />
      </div>

      <div>
        <StreamsCard
          className="m3"
          channelName={"MalaykaMusic"}
          width={"800px"}
          height={"800px"}
        />
      </div>
    </div>
  );
};

export default Musique;
