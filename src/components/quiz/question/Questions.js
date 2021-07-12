import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getQuestions } from "../../../redux/actions/questionActions";
import ListTemplate from "../../layout/ListTemplate";
import Spinner from "../../utils/Spinner";

import Question from "./Question";
import SearchQuestion from "./SearchQuestion";

const Questions = () => {
  const dispatch = useDispatch();

  const { questions, loading } = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(getQuestions());
    // eslint-disable-next-line
  }, []);
  return (
    <ListTemplate title="لیست سوالات">
      <SearchQuestion />
      <ul className="questions-list">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <li
              className="question-list-item"
              style={{ paddingBottom: "15px" }}
            >
              <div className="question-list-num">#</div>
              <div className="question-list-quest">عنوان سوال</div>
              <div className="question-list-difficulty">درجه سختی</div>
              <div className="question-list-date">تاریخ ایجاد</div>
              <div className="question-list-status">وضعیت</div>
            </li>
            {questions.map((question, index) => (
              <Question key={question.id} question={question} index={index} />
            ))}
          </>
        )}
      </ul>
    </ListTemplate>
  );
};

export default Questions;
