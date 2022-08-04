import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments, selectComments } from "../../app/reddit";
import Comments from "./Comments";

const CommentsList = (props) => {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComments(props.permalink));
  }, [props.permalink]);

  return (
    <div>
      <h2>{`r/${props.subreddit}`}</h2>
      {comments.map((post) => {
        return <Comments post={post} key={post.id} />;
      })}
    </div>
  );
};

export default CommentsList;
