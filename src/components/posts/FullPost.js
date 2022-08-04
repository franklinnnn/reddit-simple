import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const FullPost = () => {
  const posts = useSelector((state) => state.posts);
  const currentPost = useSelector((state) => state.fullPost);
  const selectedPost = posts.filter((post) => post.name === currentPost);

  return (
    <section>
      <Link to="/">
        <button>go back</button>
      </Link>
      {selectedPost.map((post) => (
        <section key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.selftext}</p>
            <div>
              <p>{post.id}</p>
              <p>{post.author}</p>
              <p>{post.num_comments}</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};
