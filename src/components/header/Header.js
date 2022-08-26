import React from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../search/SearchBar";
import {
  NewReleases,
  OutboundOutlined,
  Whatshot,
  LightMode,
  DarkMode,
  GitHub,
} from "@mui/icons-material";
import Switch from "@mui/material/Switch";
import { selectedSubreddit } from "../../features/subreddits/selectedSubredditSlice";
import { changeActiveSubreddit } from "../../features/subreddits/subredditsSlice";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          dispatch(changeActiveSubreddit("/"));
        }}
      >
        <div className="title">
          <span>reddit</span>simple
        </div>
      </Link>
      <div className="top-navigation">
        <Link
          to="/"
          onClick={() => dispatch(changeActiveSubreddit("/top"))}
          title="Top"
        >
          <OutboundOutlined className="top-navigation-button" />
        </Link>
        <Link
          to="/"
          onClick={() => dispatch(changeActiveSubreddit("/hot"))}
          title="Hot"
        >
          <Whatshot className="top-navigation-button" />
        </Link>
        <Link
          to="/"
          onClick={() => dispatch(changeActiveSubreddit("/new"))}
          title="New"
        >
          <NewReleases className="top-navigation-button" />
        </Link>
      </div>
      <SearchBar />
      <div className="personal-links">
        <a href="https://github.com/franklinnnn" target="_blank" title="GitHub">
          <GitHub className="top-navigation-button" />
        </a>
      </div>
      {/* <div className="mode-switch">
        <LightMode fontSize="small" />
        <Switch size="small" />
        <DarkMode fontSize="small" />
      </div> */}
    </div>
  );
};
