import { createSlice } from "@reduxjs/toolkit";

const fullPostSlice = createSlice({
  name: "fullPost",
  initialState: "",
  reducers: {
    changeCurrentPost: (state, action) => (state = action.payload),
  },
});

export const { changeCurrentPost } = fullPostSlice.actions;
export default fullPostSlice.reducer;
