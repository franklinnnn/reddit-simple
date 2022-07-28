import { configureStore } from "@reduxjs/toolkit";
import subredditsSlice from "../components/subreddits/subredditsSlice";

export default configureStore({
  reducer: {
    subreddits: subredditsSlice,
  },
});
