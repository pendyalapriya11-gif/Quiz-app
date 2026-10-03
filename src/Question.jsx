import { data } from "./questions";
import "./App.css";
import { useState } from "react";
function Question({
  questionid,
  isAnswered,
  setOption,
  setisAnswered,
  option,
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <h3 style={{margin: "10px"}}>
        Question {questionid + 1} of {data.length} :{" "}
      </h3>
      <div style={{ height: "14px" }}>
        <div
          style={{
            width: `${((questionid + 1) / data.length) * 100}%`,
            backgroundColor: "black",
            height: "7px",
            borderRadius: "5px",
            margin: "10px"
          }}
        ></div>
      </div>
      <div className="question-container">
        <p className="question">{data[questionid].question}</p>
        <div className="options-container">
          {data[questionid].options.map((optionitem) => {
            return (
              <button
                className="option"
                key={optionitem}
                onClick={() => {
                  if (isAnswered === false) {
                    setOption(optionitem);
                    setisAnswered(true);
                  }
                }}
                style={{border: `1px solid ${isAnswered && option===optionitem ? option===data[questionid].answer ? "#90EE90" : "red" : ""}`}}
              >
                {isAnswered && option === optionitem
                  ? option === data[questionid].answer
                    ? <span style={{color: "green",fontSize:"18px"}}>&#10004;</span>
                    : <span style={{color: "red",fontSize:"18px"}}>&#10006;</span>
                  : ""}{"   "}
                {optionitem}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Question;
