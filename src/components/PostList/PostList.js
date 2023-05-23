import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleComments } from "../../actions/postAction";
import { Card, Button, Spinner } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  const handleToggleComments = (postId) => {
    dispatch(toggleComments(postId));
  };

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="mb-4">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button
                variant="primary"
                onClick={() => handleToggleComments(post.id)}
              >
                {post.showComments ? "Hide Comments" : "Show Comments"}
              </Button>
              <Link to={`/user/${post.userId}`}>
                <img
                  className="avatar"
                  src="https://via.placeholder.com/150"
                  alt="Author"
                />
              </Link>
              {post.showComments && (
                <div className="comments">
                  {post.comments.map((comment) => (
                    <div key={comment.id}>
                      <h5>{comment.email}</h5>
                      <p>{comment.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default PostList;
