import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    id: null,
  },
  reducers: {
    setUserInfo(state, action) {
      console.log("slice에서" + action.payload);
      state.id = action.payload;
    },
    clearUserInfo(state) {
      state.id = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
