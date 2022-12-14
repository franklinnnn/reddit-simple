import { createSlice } from "@reduxjs/toolkit";

export const loadSubreddits = async () => {
  const response = await fetch(
    `https://www.reddit.com/subreddits.json?limit=50`
  );
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

export const subredditsSlice = createSlice({
  name: "subreddits",
  // initialState: [
  //   "aww",
  //   "funny",
  //   "movies",
  //   "music",
  //   "technology",
  //   "videos",
  //   "worldnews",
  // ],
  initialState: {
    subreddits: [
      {
        name: "AskReddit",
        url: "/r/AskReddit/",
        icon: "https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png",
      },
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
        name: "gaming",
        url: "/r/gaming/",
        icon: "https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png",
      },
      {
        name: "movies",
        url: "/r/movies/",
        icon: "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg",
      },
      {
        name: "music",
        url: "/r/music/",
        icon: "https://b.thumbs.redditmedia.com/UO8Hj8ZnQmYGeE9ZIjKPQEwlX46OBPC_kj2Jqlt5nqo.png",
      },
      {
        name: "pics",
        url: "/r/pics/",
        icon: "https://b.thumbs.redditmedia.com/VZX_KQLnI1DPhlEZ07bIcLzwR1Win808RIt7zm49VIQ.png",
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
    activeSubreddit: "/r/popular",
    moreSubreddits: [],
  },
  reducers: {
    addSubreddit: (state, action) => {
      state.moreSubreddits.push(action.payload);
    },

    changeActiveSubreddit: (state, action) => {
      state.activeSubreddit = action.payload;
    },
  },
});
export const { addSubreddit, changeActiveSubreddit } = subredditsSlice.actions;
export default subredditsSlice.reducer;
