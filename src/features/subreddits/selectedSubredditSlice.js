import { createSlice } from "@reduxjs/toolkit";

export const selectedSubredditSlice = createSlice({
  name: "selectedSubreddit",
  initialState: "all",
  reducers: {
    selectedSubreddit: (state, action) => {
      return (state = action.payload.subreddit);
    },
  },
});

export const { selectedSubreddit } = selectedSubredditSlice.actions;
export default selectedSubredditSlice.reducer;
