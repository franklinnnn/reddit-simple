import React, { useState, useEffect } from "react";

const Post = (props) => {
  const ROOT = "https://reddit.com";

  return (
    <section className="post-container">
      <div>
        <a href={`https://reddit.com${props.post.permalink}`} target="_blank">
          <h3>{props.post.title}</h3>
          <div>{props.post.subreddit_name_prefixed}</div>
          <div>
            {props.post.url.includes(".jpg") && (
              <img className="post-media" src={props.post.url} />
            )}
            {props.post.url.includes(".mp4") && (
              <video className="post-mdia" src={props.post.url} />
            )}
          </div>
          <div>posted by {props.post.author}</div>
          <div>
            <div>{props.post.num_comments} comments</div>
            <div>{props.post.ups} likes</div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Post;
