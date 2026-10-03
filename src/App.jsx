import { useState } from "react";
import { data } from "./questions";
import Question from "./Question";
function App() {
  const [option, setOption] = useState("");
  const [isAnswered, setisAnswered] = useState(false);
  const [questionid, setQuestionid] = useState(0);
  const [isLast, setLast] = useState(false);
  const [score, setScore] = useState(0);
  return isLast ? (
    <div className="finished-page">
      <p>Finished</p>
      <p>Your Total Score is {score} </p>
      <button onClick={()=> {
        setOption("");
        setisAnswered(false);
        setQuestionid(0);
        setLast(false);
        setScore(0);
      }} className="restart-button">Restart</button>
    </div>
  ) : (
    <>
      <Question questionid={questionid} isAnswered={isAnswered} setOption={setOption} setisAnswered={setisAnswered} option={option}/>
      <button
        className="next-button"
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
        Next
      </button>
    </>
  );
}

export default App;
