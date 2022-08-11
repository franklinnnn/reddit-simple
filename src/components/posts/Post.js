import React from "react";
import "./post.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { ModeCommentOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

export const Post = ({ post }) => {
  const { title, author, embedId, upvotes, numComments, id } = post;

  return (
    <div id="post">
      <div id="post-header">
        {post.thumbnail.includes(".jpg") &&
        !post.url.includes(".jpg") &&
        !post.domain.includes("yout") &&
        !post.isVideo ? (
          <div id="post-thumbnail">
            <img src={post.thumbnail} />
          </div>
        ) : null}
        <Link to={`/${id}`}>
          <h2 id="post-title">{title}</h2>
        </Link>
      </div>
      <div className="post-media">
        {post.url.includes(".jpg") && <img src={post.url} width="100%" />}
        {post.isVideo && (
          <ReactPlayer
            url={post.media.reddit_video.fallback_url}
            width="100%"
            controls
          />
        )}
        {post.domain.includes("yout") && (
          <ReactPlayer url={post.url} width="100%" controls />
        )}
        <ReactMarkdown>
          {post.text.substring(0, 200) + (post.text.length > 200 ? "..." : "")}
        </ReactMarkdown>
        {post.text.length > 200 ? (
          <Link to={`/${id}`}>
            <div id="post-read-more">read more</div>
          </Link>
        ) : null}
      </div>

      <div id="post-footer">
        <div id="post-sub-author">
          <p>r/{post.subreddit}</p>
          <p id="post-author">posted by {author}</p>
        </div>
        <div id="post-comments-ups">
          <Link to={`/${id}`}>
            <div>
              <ModeCommentOutlined /> <span>{post.numComments}</span>
            </div>
          </Link>
          <div>
            <ThumbUpAltOutlined /> <span>{upvotes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
