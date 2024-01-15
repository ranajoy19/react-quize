import React from "react";

export default function Progress({ i, numQuestions, points, maxPoint }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={i}></progress>
        <p>
          Questions <strong>{i + 1}</strong>/{numQuestions}
        </p>

        <p>
          <strong>{points}</strong> / {maxPoint}
        </p>
      </header>
    </div>
  );
}
