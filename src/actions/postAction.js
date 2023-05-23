import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  TOGGLE_COMMENTS,
} from "./types";

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const toggleComments = (postId) => ({
  type: TOGGLE_COMMENTS,
  payload: postId,
});
