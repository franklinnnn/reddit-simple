import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import PostList from "./components/posts/PostList";
import Post from "./components/posts/Post";
import SubredditsList from "./components/subreddits/SubredditsList";

const App = () => {
  return (
    <Router>
      
      <div className="app">
        <div className="post">
          <Switch>
            <Route exact path="/">
              <Redirect to="/r/all" />
            </Route>
            <Route path="/r/:subreddit" children={<PostList />} />
          </Switch>
        </div>
        <div className="sub">
          <SubredditsList />
        </div>
      </div>
    </Router>
  );
};

export default App;
