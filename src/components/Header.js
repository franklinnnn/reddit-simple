import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeCurrentSubreddit } from "./subreddits/subredditsSlice";
import { SearchBar } from "./search/SearchBar";
import { SubredditsDropdown } from "./subreddits/SubredditsDropdown";

export const Header = () => {
  const dispatch = useDispatch();

  const onTitleClicked = () => {
    dispatch(changeCurrentSubreddit("/r/popular/"));
  };

  return (
    <header className="header">
      <Link to="/" className="app-name">
        <div onClick={onTitleClicked}>
          <span>reddit</span>simple
        </div>
      </Link>
      <SearchBar className="searchbar" />
      <SubredditsDropdown />
    </header>
  );
};
