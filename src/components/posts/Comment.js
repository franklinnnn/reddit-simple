import React from "react";

export const Comment = ({ comment }) => {
  return (
    <section>
      <h4>{comment.author}</h4>
      <div>{comment.body}</div>
    </section>
  );
};
