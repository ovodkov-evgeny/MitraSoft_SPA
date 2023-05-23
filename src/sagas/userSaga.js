import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
} from "../actions/types";

function* fetchUser(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}

function* fetchUserPosts(action) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`
    );
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
  }
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER, fetchUser);
}

export function* watchFetchUserPosts() {
  yield takeLatest(FETCH_USER_POSTS, fetchUserPosts);
}
