import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./features/posts/postsSlice";
import subredditsReducer from "./features/subreddits/subredditsSlice";
import selectedSubredditReducer from "./features/subreddits/selectedSubredditSlice";
import commentsReducer from "./features/comments/commentsSlice";
import searchBarReducer from "./features/searchBar/searchBarSlice";
import subredditsTestSlice from "./features/subreddits/subredditTestSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    subreddits: subredditsReducer,
    selectedSubreddit: selectedSubredditReducer,
    comments: commentsReducer,
    searchTerm: searchBarReducer,
    subredditsTest: subredditsTestSlice,
  },
});
