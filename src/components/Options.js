import React from "react";

export default function Options({ question, dispatch, answer }) {
  const hasAswered = answer != null;
  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "NewAnswer", payload: index })}
            disabled={hasAswered}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
