import questions from "./data";

const Question = () => {
  return (
    <>
      {questions.map((question) => {
        const { id, title, info } = question;

        return (
          <div className="question" key={id}>
            <header>
              <h4>{title}</h4>
              <button className="btn"></button>
            </header>
            <p>{info}</p>
          </div>
        );
      })}
    </>
  );
};

export default Question;
