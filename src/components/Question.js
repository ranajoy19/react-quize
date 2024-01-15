// import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question({ questions, dispatch, answer }) {
  // const { questions, index } = useQuiz();
  // const question = questions.at(index);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options question={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
