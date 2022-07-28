import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentSubreddit, selectSubreddit } from "./subredditsSlice";
import { Link } from "react-router-dom";
import Subreddits from "./Subreddits";



const SubredditsList = () => {
  //const subs = useSelector(selectSubreddit);
  const [subs, setSubs] = useState([
    {
      subreddit: "aww",
      icon:
        "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg",
    },
    {
      subreddit: "funny",
      icon:
        "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
    },
    {
      subreddit: "movies",
      icon:
        "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg",
    },
    {
      subreddit: "technology",
      icon:
        "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
    },
    {
      subreddit: "videos",
      icon:
        "https://styles.redditmedia.com/t5_2qh1e/styles/communityIcon_w06ycvuzumg31.jpg",
    },
  ]);

  return (
    <section className="subreddits">
      <h2>Subreddits</h2>
      {subs &&
        subs.map((item) => {
          return (
            <Subreddits
              sub={item.subreddit}
              key={item.subreddit}
              icon={item.icon}
            />
          );
        })}
    </section>
  );
};

export default SubredditsList;
