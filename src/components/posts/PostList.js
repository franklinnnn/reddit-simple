import React from "react";
import { useSelector } from "react-redux";
import { changeCurrentPost } from "./fullPostSlice";
import { ModeCommentOutlined, ThumbUpOutlined } from "@mui/icons-material";
import ReactPlayer from "react-player";

export const PostList = () => {
  const searchInput = useSelector((state) => state.search);
  const posts = useSelector((state) => state.posts);

  const searchedPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  console.log(searchedPosts);
  if (posts.is_video) {
    let video = posts.media.reddit_video.fallback_url;
  }

  return (
    <section className="posts">
      {searchedPosts.map((post) => (
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
              <div className="post-header">
                {post.thumbnail.includes(".jpg") &&
                !post.url.includes(".jpg") &&
                !post.domain.includes("yout") &&
                !post.is_video ? (
                  <img src={post.thumbnail} />
                ) : null}
                <h2>{post.title}</h2>
              </div>

              <div className="post-media">
                {post.url.includes(".jpg") && (
                  <img src={post.url} width="100%" />
                )}
                {post.is_video && (
                  <ReactPlayer
                    url={post.media.reddit_video.fallback_url}
                    width="100%"
                    controls
                  />
                )}
                {post.domain.includes("yout") && (
                  <ReactPlayer url={post.url} width="100%" controls />
                )}
              </div>
              <div className="post-sub-author">
                <div>{post.subreddit_name_prefixed}</div>
                <div>posted by {post.author}</div>
              </div>
              <div className="post-comments-likes">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ModeCommentOutlined
                    fontSize="small"
                    sx={{ marginRight: 1 }}
                  />
                  {post.num_comments}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ThumbUpOutlined fontSize="small" sx={{ marginRight: 1 }} />
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
