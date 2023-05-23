import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Spinner } from "react-bootstrap";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response) => {
          setComments(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [showComments, postId]);

  const handleCommentsClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <Button variant="outline-primary" size="sm" onClick={handleCommentsClick}>
        {showComments ? "Скрыть комментарии" : "Комментарии"}
      </Button>
      {showComments && (
        <div>
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.email}</strong>
                  <p>{comment.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
