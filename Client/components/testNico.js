import { LeafPoll, Result } from "react-leaf-polls"
import "react-leaf-polls/dist/index.css";

const PollCust = () => {

  const resData = [[
    { id: 0, text: "Le Covid", votes: 3 },
    { id: 1, text: "Vacances au soleil", votes: 1 },
    { id: 2, text: "Prof de sport", votes: 2 },
  ],[
    { id: 0, text: "Acte 1", votes: 2 },
    { id: 1, text: "Acte 2", votes: 3 },
    { id: 2, text: "Acte 3", votes: 2 },
    { id: 3, text: "Final", votes: 1 },
  ],[
    { id: 0, text: "Tout", votes: 1 },
    { id: 1, text: "Le rythme", votes: 3 },
    { id: 2, text: "Rien c'est propre", votes: 0 },
  ],
  [
    { id: 0, text: "Oui", votes: 1 },
    { id: 1, text: "Non", votes: 3 },
  ]
];
  const pairRandom = Math.floor(Math.random()*4);
  let questionType = 'multiple'
  const questions = ['Choisissez un nouveau théme','Quel a été votre partie préférée ?','Que faudrait-il améliorer ?','On recommence ?']
 

  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center",
  };

  return (
    <LeafPoll
      type={questionType}
      question={questions[pairRandom]}
      results={resData[pairRandom]}
      theme={customTheme}
      isVoted={false}
    />
  );
};

export default PollCust;