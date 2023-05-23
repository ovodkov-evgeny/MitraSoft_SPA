import { all } from "redux-saga/effects";
import { watchFetchPosts } from "./postSaga";
import { watchFetchUser, watchFetchUserPosts } from "./userSaga";

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchUser(), watchFetchUserPosts()]);
}
