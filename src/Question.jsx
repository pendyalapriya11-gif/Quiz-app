import { data } from "./questions";
import "./App.css";
function Question({
  questionid,
  isAnswered,
  setOption,
  setisAnswered,
  option,
}) {
  return (
    <div>
      <h3 style={{margin: "10px"}}>
        Question {questionid + 1} of {data.length} :{" "}
      </h3>
      <div style={{ height: "14px", backgroundColor: "pink", height: "7px",
            borderRadius: "5px", }}>
        <div
          style={{
            width: `${((questionid + 1) / data.length) * 100}%`,
            backgroundColor: "black",
            height: "7px",
            borderRadius: "5px",
            transition: "width 0.3s ease"
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
                style={{backgroundColor: `${isAnswered && option===optionitem ? option===data[questionid].answer ? "green" : "red" : isAnswered && optionitem===data[questionid].answer ? "green" : ""}`}}
              >
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
