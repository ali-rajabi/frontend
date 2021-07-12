import { GET_QUESTIONS, SET_LOADING, UPDATE_QUESTION_STATUS } from "./types";

import axios from "axios";

// get questions from server
export const getQuestions = () => async (dispatch) => {
  const { data } = await axios(`http://localhost:5002/admin/questions`);
  dispatch({ type: GET_QUESTIONS, payload: data });
};

// search questions
export const searchQuestions = (searchText) => async (dispatch) => {
  const res = await axios(
    `http://localhost:5002/admin/questions/?search=${searchText}`
  );
  dispatch({ type: GET_QUESTIONS, payload: res.data });
};

// search questions
export const filterQuestions = (filterText) => async (dispatch) => {
  const res = await axios(
    `http://localhost:5002/admin/questions/?filter=${filterText}`
  );
  dispatch({ type: GET_QUESTIONS, payload: res.data });
};

// questionStatusToggler
export const questionStatusToggler =
  (questionId, currentStatus) => async (dispatch) => {
    const res = await axios.patch(
      `http://localhost:5002/admin/questions/${questionId}`,
      {
        isActive: !currentStatus,
      }
    );
    if (res.status === 200) {
      dispatch({ type: UPDATE_QUESTION_STATUS, payload: questionId });
    }
  };

// set loading
// export const setLoading = () => (dispatch) => {
//   console.log("hi");
//   dispatch({ type: SET_LOADING });
// };

// create log

// export const setLog = (log) => async (dispatch) => {
//   const res = await fetch(`http://localhost:3004/logs`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(log),
//   });
//   const data = await res.json();

//   dispatch({ type: SET_LOG, payload: data });
// };

// delete log

// export const deleteLog = (id) => async (dispatch) => {
//   await fetch(`http://localhost:3004/logs/${id}`, {
//     method: "DELETE",
//   });

//   dispatch({ type: DELETE_LOG, payload: id });
// };

// search logs
// export const searchLog = (text) => async (dispatch) => {
//   const res = await fetch(`http://localhost:3004/logs?q=${text}`);
//   const data = await res.json();

//   dispatch({ type: SEARCH_LOG, payload: data });
// };

// set current

// export const setCurrent = (log) => {
//   return { type: SET_CURRENT, payload: log };
// };
