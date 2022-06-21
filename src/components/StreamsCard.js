import { useState, useEffect } from "react";

const StreamsCard = () => {
  const [respons, setResponse] = useState([{}]);
  const url = "https://api.twitch.tv/helix/games/top";

  const fetchParties = (url) => {
    const headers = {
      "Authorization": "Bearer j66dvirbretd668on4gxvr643jnqpa",
      "Client-Id": "lb8o6spujvoj8d88sbcidt49yjp5gj",
    };
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        setResponse(data.data);
        console.log(data.data);
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
      {respons.map((rep) => (
        <img src={rep.box_art_url.replace("{width}", "300").replace("{height}", "300")}
        />
      ))}
    </div>
  );
};

export default StreamsCard;
