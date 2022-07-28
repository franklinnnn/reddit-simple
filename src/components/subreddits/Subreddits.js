import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSubreddit } from "./subredditsSlice";
import { Link } from "react-router-dom";

const Subreddits = ({ sub, icon }) => {
  const dispatch = useDispatch();
  return (
    <section className="subreddits-container">
      <Link to={`/r/${sub}`}>
        <div>
          <img src={icon} height="25" />
          <h4>{sub}</h4>
        </div>
      </Link>
    </section>
  );
};

export default Subreddits;
