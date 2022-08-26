import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addSubreddit,
  loadSubreddits,
  changeActiveSubreddit,
} from "../../features/subreddits/subredditsSlice";

export const SubredditsTest = ({ onExit }) => {
  const dispatch = useDispatch();

  const moreSubreddits = useSelector(
    (state) => state.subreddits.moreSubreddits
  );
  const selectedSub = useSelector((state) => state.selectedSubreddit);

  useEffect(
    () =>
      loadSubreddits().then((json) => {
        json.forEach((item) =>
          dispatch(
            addSubreddit({
              name: item.display_name,
              url: item.url,
              id: item.id,
              icon: item.community_icon,
              banner: item.banner_img,
            })
          )
        );
      }),
    [dispatch]
  );

  return (
    <div id="more-subreddits">
      <h3>More subreddits</h3>
      <button onClick={onExit}>close</button>
      <ul>
        {moreSubreddits.map((subreddit) => (
          <Link key={subreddit} to="/">
            <li
              onClick={() => {
                dispatch(changeActiveSubreddit(subreddit.url));
              }}
              className={subreddit === selectedSub ? "selected" : "unselected"}
            >
              <div id="more-subreddits-banner">
                {subreddit.banner ? (
                  <img src={subreddit.banner} />
                ) : (
                  <img src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png" />
                )}
              </div>

              <div id="more-subreddits-name">{subreddit.name}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
