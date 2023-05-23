import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Spinner } from "react-bootstrap";
import { fetchUser, fetchUserPosts } from "../../actions/userAction";

function UserDetails() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.users.user);
  const userPosts = useSelector((state) => state.users.userPosts);
  const loading = useSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(fetchUser(userId));
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Загрузка...</span>
        </Spinner>
      ) : (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {user.email}
              </Card.Text>
              <Card.Text>
                <strong>Компания:</strong> {user.company.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <h2>Посты пользователя</h2>
          {userPosts.map((post) => (
            <Card key={post.id} className="my-4">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Link to={`/user/${post.userId}`}>
                  <img src={post.user.avatar} alt="Аватар" className="avatar" />
                </Link>
              </Card.Body>
            </Card>
          ))}
          <Button as={Link} to="/" className="my-4">
            Назад
          </Button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
