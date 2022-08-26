import React, { useState, useEffect } from "react";
import "./subreddits.css";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
import { SubredditsDropdown } from "./SubredditsDropdown";
import {
  addSubreddit,
  changeActiveSubreddit,
  loadSubreddits,
} from "../../features/subreddits/subredditsSlice";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Subreddits = () => {
  const dispatch = useDispatch();

  const subreddits = useSelector((state) => state.subreddits.subreddits);
  const selectedSub = useSelector((state) => state.selectedSubreddit);

  // useEffect(
  //   () =>
  //     loadSubreddits().then((json) => {
  //       json.forEach((item) =>
  //         dispatch(
  //           addSubreddit({
  //             name: item.display_name,
  //             url: item.url,
  //             id: item.id,
  //             icon: item.community_icon.split("?")[0],
  //           })
  //         )
  //       );
  //     }),
  //   [dispatch]
  // );

  const [moreSubs, setMoreSubs] = useState(false);
  const onMoreSubsClick = () => {
    const moreSubreddits = document.getElementById("more");
    if (moreSubs) {
      moreSubreddits.style.display = "none";
      setMoreSubs(false);
    } else {
      moreSubreddits.style.display = "block";
      setMoreSubs(true);
    }
  };

  return (
    <div id="subreddits">
      <h3>Featured Subreddits</h3>
      <ul>
        {subreddits.map((subreddit) => (
          <Link key={subreddit} to="/">
            <li
              onClick={() => {
                dispatch(changeActiveSubreddit(subreddit.url));
              }}
              className={subreddit === selectedSub ? "selected" : "unselected"}
            >
              <img src={subreddit.icon} width="25px" />
              {subreddit.name}
            </li>
          </Link>
        ))}
      </ul>
      <div onClick={onMoreSubsClick} id="more-subs">
        <h4>
          More Subreddits
          <KeyboardArrowDownIcon className="more-arrow" />
        </h4>
      </div>
      <div id="more">
        <SubredditsDropdown />
      </div>
    </div>
  );
};
