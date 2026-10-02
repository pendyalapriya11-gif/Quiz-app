import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      question: "Which is used to develop frontend applications?",
      options: ["React", "Node.js", "MongoDB", "Express"],
      answer: "React",
    },
    {
      id: 2,
      question: "Which is used to develop backend applications?",
      options: ["React", "Node.js", "MongoDB", "Express"],
      answer: "Node.js",
    },
  ];
  const [option, setOption] = useState("");
  const [isAnswered, setisAnswered] = useState(false);
  const [questionid, setQuestionid] = useState(0);
  const [isLast, setLast] = useState(false);
  const [score, setScore] = useState(0);
  return isLast ? (
    <>
      <p>Finished</p>
      <p>Your Total Score is {score} </p>
    </>
  ) : (
    <>
      <h3>Question {questionid + 1} : </h3>
      <p>{data[questionid].question}</p>
      <ul>
        {data[questionid].options.map((optionitem) => {
          return (
            <li
              key={optionitem}
              onClick={() => {
                if (isAnswered===false) {
                  setOption(optionitem);
                  setisAnswered(true);
                }
              }}
            >
              {optionitem} {isAnswered && option === optionitem ? option === data[questionid].answer ? "✓" : "✗" : ""}
            </li>
          );
        })}
      </ul>
      {isAnswered ? (
        option === data[questionid].answer ? (
          <p>Correct</p>
        ) : (
          <p>Incorrect</p>
        )
      ) : (
        "No Option Selected"
      )}
      <button
        onClick={() => {
          option === data[questionid].answer
            ? setScore(score + 1)
            : console.log(score);
          setOption("");
          setisAnswered(false);
          questionid !== data.length - 1
            ? setQuestionid(questionid + 1)
            : setLast(true);
        }}
      >
        next
      </button>
    </>
  );
}

export default App;
