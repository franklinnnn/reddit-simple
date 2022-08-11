import React from "react";
import "./postList.css";
import { Route, Switch } from "react-router-dom";

import { Posts } from "./Posts";
import { FullPost } from "./FullPost";

export const PostList = () => {
  return (
    <section className="post-list">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/:id" component={FullPost} />
      </Switch>
    </section>
  );
};
