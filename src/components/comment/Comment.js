import React from "react";
import ReactMarkdown from "react-markdown";

export const Comment = ({ comment }) => {
  return (
    <div className="individual-comment">
      <h4>{comment.author}</h4>
      <ReactMarkdown>{comment.body}</ReactMarkdown>
    </div>
  );
};
