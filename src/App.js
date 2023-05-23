import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/postAction";

import Header from "./components/Header/Header";
import PostList from "./components/PostList/PostList";
import About from "./components/About/About";
import UserDetails from "./components/UserDetails/UserDetails";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" component={PostList} />
        <Route path="/about" component={About} />
        <Route path="/user/:userId" component={UserDetails} />
      </Routes>
    </div>
  );
};

export default App;
