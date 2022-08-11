import React, { useEffect } from "react";
import "./fullPost.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadComments } from "../../features/comments/commentsSlice";
import { Comment } from "../comment/Comment";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
  ArrowBack,
  ModeCommentOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

export const FullPost = ({ match }) => {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.data.find((post) => post.id === match.params.id)
  );
  const { subreddit, title, author, text, upvotes, id } = post;

  useEffect(() => {
    dispatch(loadComments({ subreddit, id }));
  }, [dispatch, post, subreddit, id]);

  const { isLoadingComments, data } = useSelector((state) => state.comments);

  return (
    <section id="full-post-container">
      <div id="back-button">
        <Link to="/">
          <ArrowBack /> Go Back
        </Link>
      </div>
      <div id="full-post">
        <div id="full-post-sub-author">
          <span>r/{subreddit}</span>
          <span>posted by {author}</span>
        </div>
        <h2>{title}</h2>
        <div id="post-media">
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
        </div>
        <div id="full-post-text">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        {post.url.includes("reddit") ? null : (
          <a href={post.url} id="single-post-link" target="_blank">
            {post.url.substring(0, 50) + (post.url.length > 50 ? "..." : "")}
          </a>
        )}
        <div id="full-post-comments-ups">
          <div>
            <ModeCommentOutlined /> <span>{post.numComments} comments</span>
          </div>
          <div>
            <ThumbUpAltOutlined /> <span>{upvotes} upvotes</span>
          </div>
        </div>
        <div id="comments-container">
          {isLoadingComments ? (
            <p>Loading...</p>
          ) : (
            data.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};
