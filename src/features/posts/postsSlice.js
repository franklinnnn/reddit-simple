import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
  "posts/loadPosts",
  async (subreddit, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}/hot.json`
      );
      const json = await response.json();

      return json;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    isLoadingPosts: false,
    failedToLoadPosts: false,
    data: [],
  },
  extraReducers: {
    [loadPosts.pending]: (state) => {
      state.isLoadingPosts = true;
      state.failedToLoadPosts = false;
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = false;
      state.data =
        action.payload.data !== undefined
          ? action.payload.data.children.map((item) => {
              return {
                id: item.data.id,
                author: item.data.author,
                subreddit: item.data.subreddit,
                title: item.data.title,
                text: item.data.selftext,
                upvotes: item.data.ups,
                numComments: item.data.num_comments,
                url: item.data.url,
                thumbnail: item.data.thumbnail,
                domain: item.data.domain,
                isVideo: item.data.is_video,
                media: item.data.media,
              };
            })
          : "failed";
    },
    [loadPosts.rejected]: (state) => {
      state.isLoadingPosts = false;
      state.failedToLoadPosts = true;
    },
  },
});

export default postsSlice.reducer;
