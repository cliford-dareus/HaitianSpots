import { configureStore } from "@reduxjs/toolkit";
import { locationApi } from "../features/api/locationApi";

export const store = configureStore({
  reducer: {
    [locationApi.reducerPath] : locationApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(locationApi.middleware),
});
