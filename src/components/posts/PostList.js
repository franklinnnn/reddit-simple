import React, { useState, useEffect } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState(["all"]);

  //   const getPosts = async () => {
  //     fetch(`https://www.reddit.com/r/${subreddit}.json`).then((response) => {
  //       if (response.status !== 200) {
  //         console.log("there has been a fetch error");
  //         return;
  //       }
  //       response.json().then((data) => {
  //         if (data != null) {
  //           setPosts(data.data.children);
  //           console.log(data);
  //         }
  //       });
  //     });
  //   };

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then((response) => {
      if (response.status !== 200) {
        console.log("there has been a fetch error");
        return;
      }
      response.json().then((data) => {
        if (data != null) {
          setPosts(data.data.children);
          console.log(data);
        }
      });
    });
  }, [subreddit]);

  return (
    <section className="posts">
      <div className="header">
        <div className="app-name" onClick={(e) => setSubreddit("all")}>
          <span>reddit</span>simple
        </div>
        <div className="subreddit-input">
          r/
          <input
            type="text"
            className="input"
            onChange={(e) => setSubreddit(e.target.value)}
            value={subreddit}
          />
        </div>
      </div>
      <div>
        {posts != null
          ? posts.map((post, index) => <Post key={index} post={post.data} />)
          : ""}
      </div>
    </section>
  );
};

export default PostList;
