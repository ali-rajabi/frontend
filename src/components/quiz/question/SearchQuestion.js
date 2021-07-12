import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchQuestions,
  filterQuestions,
} from "../../../redux/actions/questionActions";
const SearchQuestion = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [searchedText, setSearchedText] = useState(null);

  // submit for search
  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      dispatch(searchQuestions(text.trim()));
      setText("");
      setDifficulty("all");
      setSearchedText(text.trim());
    }
  };

  // search by difficulty
  const filterByDifficulty = (e) => {
    setDifficulty(e.target.value);
    dispatch(filterQuestions(e.target.value));
  };

  // clear search result
  const clearSearchResult = () => {
    dispatch(filterQuestions("all"));
    setSearchedText(null);
  };

  return (
    <form className="search-question-form" onSubmit={(e) => submitHandler(e)}>
      <input
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input-question-form"
      />

      <button className="submit-question-form">جستجو</button>
      <select
        name="difficulty"
        onChange={(e) => filterByDifficulty(e)}
        value={difficulty}
      >
        <option value="all">همه</option>
        <option value="easy">آسان</option>
        <option value="medium">متوسط</option>
        <option value="hard">سخت</option>
      </select>
      {searchedText && (
        <div
          className="clear-search-questions"
          onClick={() => clearSearchResult()}
        >
          جستجو بر اساس کلمه : <span>{searchedText}</span>
          <i className="fa fa-times"></i>
        </div>
      )}
    </form>
  );
};

export default SearchQuestion;
