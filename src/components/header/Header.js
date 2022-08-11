import React from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../search/SearchBar";
import { NewReleases, OutboundOutlined, Whatshot } from "@mui/icons-material";
import { selectedSubreddit } from "../../features/subreddits/selectedSubredditSlice";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <div className="title">
          <span>reddit</span>simple
        </div>
      </Link>
      {/* <div className="top-navigation">
        <OutboundOutlined />
        <Whatshot />
        <NewReleases />
      </div> */}
      <SearchBar />
    </div>
  );
};
