import "./subreddits.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectedSubreddit } from "../../features/subreddits/selectedSubredditSlice";

export const Subreddits = () => {
  const dispatch = useDispatch();

  const subreddits = useSelector((state) => state.subreddits);
  const selectedSub = useSelector((state) => state.selectedSubreddit);

  return (
    <div id="subreddits">
      <h4>Featured Subreddits</h4>
      <ul>
        {subreddits.map((subreddit) => (
          <Link key={subreddit} to="/">
            <li
              onClick={() => {
                dispatch(selectedSubreddit({ subreddit }));
              }}
              className={subreddit === selectedSub ? "selected" : "unselected"}
            >
              {/* <img src={subreddit.icon} width="25px" /> */}
              {subreddit}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
