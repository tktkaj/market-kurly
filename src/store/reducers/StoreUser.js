import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    id: null,
  },
  reducers: {
    setUserInfo(state, action) {
      state.id = action.payload;
    },
    clearUserInfo(state) {
      state.id = null;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
