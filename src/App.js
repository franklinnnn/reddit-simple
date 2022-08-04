import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./App.css";

import { Header } from "./components/Header";
import { PostList } from "./components/posts/PostList";
import { FullPost } from "./components/posts/FullPost";
import { Subreddits } from "./components/subreddits/Subreddits";
import { SubredditsList } from "./components/subreddits/SubredditsList";

import { getSubredditPosts } from "./app/Reddit";
import { changePosts } from "./components/posts/postsSlice";

function App() {
  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getSubredditPosts(currentSubreddit).then((response) => {
      dispatch(changePosts(response));
    });
  }, [currentSubreddit]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/fullPost">
              <FullPost />
            </Route>
            <Route exact path="/">
              <PostList />
            </Route>
          </Switch>

          <SubredditsList />
        </main>
      </div>
    </Router>
  );
}

export default App;
