import React from "react";
import StreamsCard from "../components/StreamsCard";
import Onglets from "../components/onglet";

const Sport = () => {
  return (
    <div>
      <Onglets />
      <div className="sinscrire inter-normal-black-30px">
        {" "}
        <a href="http://localhost:1234">Accueil</a>
      </div>
      <div>
        <StreamsCard channelName={"gonni"} width={"800px"} height={"800px"} />
      </div>
      <div>
        <StreamsCard
          channelName={"usaballhockey"}
          width={"800px"}
          height={"800px"}
        />
      </div>
      <div>
        <StreamsCard
          channelName={"Arigeli_"}
          width={"800px"}
          height={"800px"}
        />
      </div>
      <div>
        <StreamsCard
          channelName={"BepiTv_1"}
          width={"800px"}
          height={"800px"}
        />
      </div>

      <div>
        <StreamsCard
          channelName={"volley15"}
          width={"800px"}
          height={"800px"}
        />
      </div>
    </div>
  );
};

export default Sport;
