import { createSlice } from "@reduxjs/toolkit";

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [
      {
        name: "aww",
        url: "/r/aww/",
        icon: "https://styles.redditmedia.com/t5_2qh1o/styles/communityIcon_6fzlk8ukx6s51.jpg",
      },
      {
        name: "funny",
        url: "/r/funny/",
        icon: "https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png",
      },
      {
        name: "movies",
        url: "/r/movies/",
        icon: "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg",
      },
      {
        name: "technology",
        url: "/r/technology/",
        icon: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
      },
      {
        name: "videos",
        url: "/r/videos/",
        icon: "https://styles.redditmedia.com/t5_2qh1e/styles/communityIcon_w06ycvuzumg31.jpg",
      },
    ],
    dropdownSubreddits: [],
    currentSubreddit: "/r/popular/",
  },
  reducers: {
    addSubreddit: (state, action) => {
      state.dropdownSubreddits.push(action.payload);
    },

    changeCurrentSubreddit: (state, action) => {
      state.currentSubreddit = action.payload;
    },
  },
});

export const { addSubreddit, changeCurrentSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
