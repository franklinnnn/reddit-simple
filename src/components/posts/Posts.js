import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { changeActivePostId } from "./individualPostSlice";
import { ModeCommentOutlined, ThumbUpOutlined } from "@mui/icons-material";

export const Posts = () => {
  const activeSearchInput = useSelector((state) => state.search);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(activeSearchInput.toLowerCase())
  ); //select only posts that include the search bar value

  return (
    <section className="posts">
      {filteredPosts.map((post) => (
        <section className="post-container" key={post.id}>
          <div className="post-body">
            {/* <Link
              to={`https://reddit.com${post.permalink}`}
              onClick={() => dispatch(changeActivePostId(post.name))}
            >
              <h2>{post.title}</h2>
              <p>
                {post.selftext.substring(0, 600) +
                  (post.selftext.length > 600 ? " [...]" : "")}
              </p>
              {post.selftext.length > 600 ? (
                <p className="read-more">read more...</p>
              ) : null}
              <img
                src={post.url}
                onError={(e) => (e.target.style.display = "none")}
              />
            </Link> */}
            <a href={`https://reddit.com${post.permalink}`} target="_blank">
              <h2>{post.title}</h2>
              <img
                src={post.url}
                onError={(e) => (e.target.style.display = "none")}
                className="post-media"
              />
              <div className="post-sub-author">
                <div>{post.subreddit_name_prefixed}</div>
                <div>posted by {post.author}</div>
              </div>
              <div className="post-comments-likes">
                <div>
                  <ModeCommentOutlined fontSize="small" />
                  {post.num_comments}
                </div>
                <div>
                  <ThumbUpOutlined fontSize="small" />
                  {post.ups}
                </div>
              </div>
            </a>
          </div>
        </section>
      ))}
    </section>
  );
};
