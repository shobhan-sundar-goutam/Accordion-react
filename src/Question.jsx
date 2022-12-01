import { useState } from "react";

const Question = ({ title, info }) => {
  const [display, setDisplay] = useState("none");

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            display === "none" ? setDisplay("block") : setDisplay("none");
          }}
        >
          {display === "none" ? "+" : "-"}
        </button>
      </header>
      <p style={{ display }}>{info}</p>
    </div>
  );
};

export default Question;
