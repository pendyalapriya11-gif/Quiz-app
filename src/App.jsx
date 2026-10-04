import { useState, useEffect } from "react";
import { data } from "./questions";
import Question from "./Question";
function App() {
  const [option, setOption] = useState("");
  const [isAnswered, setisAnswered] = useState(false);
  const [questionid, setQuestionid] = useState(0);
  const [isLast, setLast] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  useEffect(() => {
      const intervalId = setInterval(() => {
          setTime((time) => {
            if(time>1) return time-1;
            else {
              clearInterval(intervalId);
              setLast(true);
              return 0;
            }
          });
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
  }, [isLast]);
  return isLast ? (
    <div className="finished-page">
      <p>Finished</p>
      <p>Your Total Score is {score} </p>
      <button
        onClick={() => {
          setOption("");
          setisAnswered(false);
          setQuestionid(0);
          setLast(false);
          setScore(0);
          setTime(30);
        }}
        className="restart-button"
      >
        Restart
      </button>
    </div>
  ) : (
    <>
      <p>Time : {time}</p>
      <Question
        questionid={questionid}
        isAnswered={isAnswered}
        setOption={setOption}
        setisAnswered={setisAnswered}
        option={option}
      />
      <button
        className="next-button"
        onClick={() => {
          option === data[questionid].answer
            ? setScore((score) => score + 1)
            : console.log(score);
          setOption("");
          setisAnswered(false);
          questionid !== data.length - 1
            ? setQuestionid(questionid + 1)
            : setLast(true);
          setTime(30);
        }}
        disabled={!isAnswered}
      >
        {questionid === data.length - 1 ? "Finish" : "Next"}
      </button>
    </>
  );
}

export default App;
