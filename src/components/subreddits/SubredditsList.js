import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSubreddit } from "./subredditsSlice";
import { selectedSubreddit } from "./selelctedSubredditSlice";
import { Link } from "react-router-dom";

export const SubredditsList = (props) => {
  const selectedSub = useSelector((state) => state.selectedSubreddit);
  const subreddits = useSelector((state) => state.subreddits);
  const dispatch = useDispatch();
  return (
    <section className="subreddits-container">
      <h4>Featured Subreddits</h4>
      <ul>
        {subreddits.map((subreddit) => (
          <Link to="/" key={subreddit}>
            <li
              onClick={() => dispatch(selectedSubreddit({ subreddit }))}
              className={
                subreddit === selectedSub
                  ? { backgroundColor: "#e0fbfc" }
                  : { backgroundColor: "#fff" }
              }
            >
              {subreddit}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
