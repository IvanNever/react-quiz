export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) {
    return null;
  }

  function handleClick() {
    if (index < numQuestions - 1) {
      return dispatch({ type: "nextQuestion" });
    } else {
      return dispatch({ type: "finish" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      {index < numQuestions - 1 ? "Next" : "Finish"}
    </button>
  );
}
