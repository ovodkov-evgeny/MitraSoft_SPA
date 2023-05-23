import { call, put, takeLatest } from "redux-saga/effects";
import { fetchPostsSuccess, fetchPostsFailure } from "../actions/postAction";
import { FETCH_POSTS } from "../actions/types";
import axios from "axios";

function* fetchPostsSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPostsSaga);
}
