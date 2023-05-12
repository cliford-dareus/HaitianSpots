import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocalStorage } from "../../Utils/functions/getLocalStorage";

const initialState = {
  user: getUserFromLocalStorage(),
  isLoggedIn: getUserFromLocalStorage().isLoggedIn,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    storeUserInfo(state, action) {
      state.user = action.payloa;
      state.isLoggedIn = true;
      localStorage.setItem(
        "User",
        JSON.stringify({
          user: action.payload,
          isLoggedIn: true,
        })
      );
    },
    removeUserInfo(state) {
      state.user = {};
      state.isLoggedIn = false;
      localStorage.removeItem("User");
    },
  },
});

export const { storeUserInfo, removeUserInfo } = UserSlice.actions;
export default UserSlice.reducer;
