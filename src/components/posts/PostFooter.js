import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadComments } from "../../features/comments/commentsSlice";
import { Comment } from "./Comment";
import { ModeCommentOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

export const PostFooter = (props, { match }) => {
  const [active, setActive] = useState();

  const showComments = () => {
    const postComments = document.getElementById(props.postId);
    if (active) {
      postComments.style.display = "none";
      setActive(false);
    } else {
      postComments.style.display = "block";
      setActive(true);
    }
  };

  return (
    <div id="post-footer">
      <div id="post-sub-author">
        <p>r/{props.postSubreddit}</p>
        <p id="post-author">posted by {props.postAuthor}</p>
      </div>
      <div id="post-comments-ups">
        {/* <Link to={`/${id}`}>
          <div>
            <ModeCommentOutlined /> <span>{props.postComments}</span>
          </div>
        </Link> */}
        <div onClick={showComments}>
          <ModeCommentOutlined /> <span>{props.postComments}</span>
        </div>
        <div>
          <ThumbUpAltOutlined /> <span>{props.postUpvotes}</span>
        </div>
      </div>
      {/* <div id="comments-container">
        <Comment comment={comment} key={comment.id} visible={props.visible} />
      </div> */}
    </div>
  );
};
