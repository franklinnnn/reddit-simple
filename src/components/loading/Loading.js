import React from "react";
import "./loading.css";
import { CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <div id="loading">
      <CircularProgress
        sx={{
          color: "#ef6461",
        }}
      />
      <h1>Loading...</h1>
    </div>
  );
};
