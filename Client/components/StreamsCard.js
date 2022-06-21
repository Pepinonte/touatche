import { useState, useEffect } from "react";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

const StreamsCard = () => {
  const [respons, setResponse] = useState([{}]);
  const [img, setImg] = useState([{}]);
  const url = "https://api.twitch.tv/helix/games/top";

  const fetchParties = (url) => {
    const headers = {
      Authorization: "Bearer j66dvirbretd668on4gxvr643jnqpa",
      "Client-Id": "lb8o6spujvoj8d88sbcidt49yjp5gj",
    };
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        let tempList = data.data;
        setResponse(data.data);
        console.log(tempList);
        setImg(
          tempList.map((rep) =>
            rep.box_art_url.replace("{width}", "300").replace("{height}", "300")
          )
        );
        // console.log(data.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchParties(url);
  }, []);

  console.log(respons);
  return (
    <div>
      regarde la console fdp{" "}
      {respons.map((rep) => (
        <li>{rep.name}</li>
      ))}
      {img.map((rep) => (
        <img src={rep} />
      ))}
      <div>
        {/* <TwitchEmbed
          channel="smoke"
          id="Smoke"
          theme="dark"
          muted
          onVideoPause={() => console.log(":(")}
        /> */}
        {/* <TwitchChat channel="smoke" theme="dark" /> */}
        <TwitchPlayer channel="smoke" height="300" width="300" />
      </div>
    </div>
  );
};

export default StreamsCard;