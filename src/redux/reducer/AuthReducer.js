import { createSlice } from "@reduxjs/toolkit";

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState: {
    isNotFirstLaunch: false,
    isLogin: false,
    loggedUserData: null,
  },
  reducers: {
    changeFirstLaunchStatus(state, action) {
      state.isNotFirstLaunch = action.payload;
    },
    changeAuthStatus(state, action) {
      state.isLogin = action.payload;
    },
    storeLoginDetails(state, action) {
      state.loggedUserData = action.payload;
    },
  },
});

export const { changeAuthStatus, storeLoginDetails, changeFirstLaunchStatus } =
  AuthReducer.actions;
export default AuthReducer.reducer;
