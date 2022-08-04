import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSubreddits } from "../../app/Reddit";
import {
  addSubreddit,
  changeCurrentSubreddit,
} from "../subreddits/subredditsSlice";

export const SubredditsDropdown = (props) => {
  const dispatch = useDispatch();

  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );
  const dropdownSubreddits = useSelector(
    (state) => state.subreddits.dropdownSubreddits
  );

  useEffect(() => {
    getSubreddits().then((json) => {
      json.forEach((item) => {
        dispatch(
          addSubreddit({
            name: item.display_name,
            url: item.url,
            id: item.id,
            icon: item.community_icon,
          })
        );
      });
    });
  }, [dispatch]);

  const onOptionSelected = (e) => {
    dispatch(changeCurrentSubreddit(e.target.value));
  };

  const dropdown = (subs) => {
    return (
      <select
        className="sub-selector"
        value={currentSubreddit}
        onChange={onOptionSelected}
      >
        {subs.map((sub) => (
          <option key={sub.id} value={sub.url}>
            {sub.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <section className="subreddits-container">
      {dropdown(dropdownSubreddits)}
    </section>
  );
};
