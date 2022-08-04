import { configureStore } from "@reduxjs/toolkit";
import searchBarSlice from "../components/search/searchBarSlice";
import subredditsSlice from "../components/subreddits/subredditsSlice";
import individualPostSlice from "../components/posts/individualPostSlice";
import postsSlice from "../components/posts/postsSlice";
import fullPostSlice from "../components/posts/fullPostSlice";

export default configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice,
    individualPostId: individualPostSlice,
    fullPost: fullPostSlice,
  },
});
