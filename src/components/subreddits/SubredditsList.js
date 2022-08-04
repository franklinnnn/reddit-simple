import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSubreddit } from "./subredditsSlice";
import { Link } from "react-router-dom";

export const SubredditsList = (props) => {
  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );
  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const dispatch = useDispatch();
  return (
    <section className="subreddits-container">
      <h4>Featured Subreddits</h4>
      <ul>
        {subreddits.map((item) => (
          <Link to="/" key={item.id}>
            <li
              onClick={() => dispatch(changeCurrentSubreddit(item.url))}
              className={
                currentSubreddit === item.url
                  ? { backgroundColor: "#e0fbfc" }
                  : { backgroundColor: "#fff" }
              }
            >
              <img
                src={item.icon}
                onError={(e) => (e.target.src = props.logo)}
                width="22px"
              />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
