import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addSubreddit,
  loadSubreddits,
  changeActiveSubreddit,
} from "../../features/subreddits/subredditsSlice";

export const SubredditsDropdown = () => {
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
              icon: item.icon_img,
              banner: item.banner_img,
            })
          )
        );
      }),
    []
  );

  const onOptionSelected = (e) => {
    dispatch(changeActiveSubreddit(e.target.value));
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    // <select
    //   className="subreddits-dropdown"
    //   value={selectedSub}
    //   onChange={onOptionSelected}
    // >
    //   {moreSubreddits.map((subreddit) => (
    //     <option key={subreddit.id} value={subreddit.url}>
    //       {subreddit.name}
    //     </option>
    //   ))}
    // </select>
    <div id="more-subreddits">
      <ul>
        {moreSubreddits.map((subreddit) => (
          <Link key={subreddit} to="/">
            <li
              onClick={() => {
                dispatch(changeActiveSubreddit(subreddit.url));
                scrollToTop();
              }}
              className={subreddit === selectedSub ? "selected" : "unselected"}
            >
              <div>
                {subreddit.icon ? (
                  <img src={subreddit.icon} width="25px" />
                ) : (
                  <img
                    src="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png"
                    width="25px"
                  />
                )}
              </div>
              {subreddit.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
