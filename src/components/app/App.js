import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "../header/Header";
import { PostList } from "../posts/PostList";
import { Subreddits } from "../subreddits/Subreddits";

function App() {
  return (
    <Router>
      <section>
        <Header />
        <main className="content">
          <PostList />
          <Subreddits />
        </main>
      </section>
    </Router>
  );
}

export default App;
