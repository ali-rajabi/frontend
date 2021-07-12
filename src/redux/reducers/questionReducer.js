import {
  GET_QUESTIONS,
  SET_LOADING,
  UPDATE_QUESTION_STATUS,
} from "../actions/types";

const initialState = {
  questions: [],
  loading: false,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload, loading: false };
    case UPDATE_QUESTION_STATUS:
      return {
        ...state,
        questions: state.questions.map((quest) =>
          quest.id === action.payload
            ? { ...quest, isActive: !quest.isActive }
            : quest
        ),
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default questionReducer;
