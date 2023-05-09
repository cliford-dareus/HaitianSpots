import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../Utils/functions/getLocalStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  isLoggedIn: false,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    storeUserInfo(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('User', JSON.stringify({user: action.payload, isLoggedIn: true}))
    },
  },
});

export const { storeUserInfo } = UserSlice.actions;
export default UserSlice.reducer
