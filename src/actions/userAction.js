import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
} from "./types";

export const fetchUser = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER });
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        dispatch({
          type: FETCH_USER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_USER_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const fetchUserPosts = (userId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_POSTS });
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        dispatch({
          type: FETCH_USER_POSTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_USER_POSTS_FAILURE,
          payload: error.message,
        });
      });
  };
};
