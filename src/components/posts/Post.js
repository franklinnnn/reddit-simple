import React from "react";
import "./post.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { ModeCommentOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { dateCalculator } from "../../features/date/dateCalculator";
import { PostFooter } from "./PostFooter";
import { changeActiveSubreddit } from "../../features/subreddits/subredditsSlice";

export const Post = ({ post }) => {
  // const { title, author, upvotes, numComments, id, thumbnail, url, domain, isVideo, text, media, created } = post;
  const dispatch = useDispatch();

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
        <Link to={`/${post.id}`}>
          <h2 id="post-title">{post.title}</h2>
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
          <Link to={`/${post.id}`}>
            <div id="post-read-more">read more</div>
          </Link>
        ) : null}
      </div>

      <div id="post-footer">
        <div id="post-sub-author">
          <Link
            to="/"
            onClick={() =>
              dispatch(changeActiveSubreddit(`r/${post.subreddit}`))
            }
          >
            <p>r/{post.subreddit}</p>
          </Link>
          <p id="post-author">
            posted by {post.author} {dateCalculator(post.created)}
          </p>
        </div>
        <div id="post-comments-ups">
          <Link to={`/${post.id}`}>
            <div>
              <ModeCommentOutlined /> <span>{post.numComments}</span>
            </div>
          </Link>
          <div>
            <ThumbUpAltOutlined /> <span>{post.upvotes}</span>
          </div>
        </div>
      </div>

      {/* <PostFooter
        postId={post.id}
        postSubreddit={post.subreddit}
        postAuthor={post.author}
        postComments={post.numComments}
        postUpvotes={post.upvotes}
        visible={false}
      /> */}
    </div>
  );
};
