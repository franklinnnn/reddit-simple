import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const IndividualPost = () => {
  const posts = useSelector((state) => state.posts);
  const activePostId = useSelector((state) => state.individualPostId);

  const selectedPost = posts.filter((post) => post.name === activePostId);

  return (
    <section className="posts">
      <Link to="/">
        <button className="goback">Go back to all posts</button>
      </Link>
      {selectedPost.map((post) => (
        <section className="post" key={post.id}>
          <div>{post.ups}</div>

          <div className="post-body">
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
            <img
              src={post.url}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        </section>
      ))}
    </section>
  );
};
