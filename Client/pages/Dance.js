import React from "react";
import StreamsCard from "../components/StreamsCard";
import Onglets from "../components/onglet";

const Dance = () => {
  return (
    <div>
      <Onglets />
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
