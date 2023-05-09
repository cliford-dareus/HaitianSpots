import { configureStore } from "@reduxjs/toolkit";
import { locationApi } from "../features/api/locationApi";
import { authApi } from "../features/api/authApi";
import userReducer from '../features/slices/userSlice';

export const store = configureStore({
  reducer: {
    User: userReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware, authApi.middleware),
});
