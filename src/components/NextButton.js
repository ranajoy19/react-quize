import React from "react";

export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <div>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "NextQuestion" })}
        >
          Next
        </button>
      </div>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
