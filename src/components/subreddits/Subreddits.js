import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getSubreddits } from "../../app/Reddit";
import { changeCurrentSubreddit } from "./subredditsSlice";

export const Subreddits = (props) => {
  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );
  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const dispatch = useDispatch();
  return (
    <section className="subreddits-container">
      <h3>Subreddits</h3>
      <ul>
        {subreddits.map((item) => (
          <Link to="/" key={item.id}>
            <li
              onClick={() => dispatch(changeCurrentSubreddit(item.url))}
              className="active-sub'"
            >
              <img
                src={item.icon}
                onError={(e) => (e.target.src = props.logo)}
                width="25px"
              />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
