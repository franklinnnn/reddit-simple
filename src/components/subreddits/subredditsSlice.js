import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
  name: "subreddit",
  initialState: {
    subs: [
      {
        subreddit: "aww",
        icon: "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg",
      },
      {
        subreddit: "funny",
        icon: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      },
      {
        subreddit: "movies",
        icon: "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg",
      },
      {
        subreddit: "technology",
        icon: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
      },
      {
        subreddit: "videos",
        icon: "https://styles.redditmedia.com/t5_2qh1e/styles/communityIcon_w06ycvuzumg31.jpg",
      },
    ],
  },
  reducers: {
    addSubreddit: (state, action) => {
      state.subs.push(action.payload);
    },
    changeCurrentSubreddit: (state, action) => {
      state.currentSub = action.payload;
    },
  },
});

export const selectSubreddit = (state) => state.subreddit.subs;
export const selectCurrentSubreddit = (state) => state.subreddit.currentSubreddit;
export const { addSubreddit, changeCurrentSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
