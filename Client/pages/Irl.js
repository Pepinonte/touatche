import React from "react";
import StreamsCard from "../components/StreamsCard";
import Onglets from "../components/onglet";

const Irl = () => {
  return (
    <div>
      <div>
        <Onglets />
      </div>
      <div>
        <StreamsCard
          channelName={"TokyoExclusive"}
          width={"800px"}
          height={"800px"}
        />
      </div>
      <div>
        <StreamsCard
          channelName={"BotezLive"}
          width={"800px"}
          height={"800px"}
        />
      </div>

      <div>
        <StreamsCard
          channelName={"tertuliasliberales"}
          width={"800px"}
          height={"800px"}
        />
      </div>
    </div>
  );
};

export default Irl;
