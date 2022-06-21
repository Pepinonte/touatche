import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";

const testNico = () => {
  // Persistent data array (typically fetched from the server)
  const resData = [
    { id: 0, text: "Answer 1", votes: 0 },
    { id: 1, text: "Answer 2", votes: 0 },
    { id: 2, text: "Answer 3", votes: 0 },
  ];

  // Object keys may vary on the poll type (see the 'Theme options' table below)
  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center",
  };

  return (
    <LeafPoll
      type="multiple"
      question="What you wanna ask?"
      results={resData}
      theme={customTheme}
      isVoted={false}
    />
  );
};

export default testNico;
