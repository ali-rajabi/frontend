import moment from "jalali-moment";
import { useDispatch } from "react-redux";
import { questionStatusToggler } from "../../../redux/actions/questionActions";

const Question = ({ question, index }) => {
  const dispatch = useDispatch();

  let difficultyStatus = ``;
  if (question.difficulty === "hard") {
    difficultyStatus = "سخت";
  } else if (question.difficulty === "medium") {
    difficultyStatus = "متوسط";
  } else if (question.difficulty === "easy") {
    difficultyStatus = "آسان";
  }
  return (
    <li className="question-list-item">
      <div className="question-list-num">{index + 1}</div>
      <div className="question-list-quest">{question.quest}</div>
      <div className="question-list-difficulty">{difficultyStatus}</div>
      <div className="question-list-date">
        {moment(question.createdAt).locale("fa").format("hh:mm - YYYY/MM/DD ")}
      </div>
      <div
        className="question-list-status"
        onClick={() =>
          dispatch(questionStatusToggler(question.id, question.isActive))
        }
      >
        {question.isActive ? "فعال" : "غیر فعال"}
      </div>
    </li>
  );
};

export default Question;
