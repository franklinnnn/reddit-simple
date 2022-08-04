import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveSearch } from "./searchBarSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const currentSubreddit = useSelector(
    (state) => state.subreddits.currentSubreddit
  );
  const search = useSelector((state) => state.search);

  const onChange = (e) => {
    dispatch(changeActiveSearch(e.target.value));
  };
  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        id="search"
        value={search}
        placeholder={`search posts...`}
        onChange={onChange}
      />
    </div>
  );
};
