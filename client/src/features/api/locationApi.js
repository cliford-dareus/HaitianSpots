import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => `/location`,
    }),
  }),
});

export const { useGetLocationsQuery } = locationApi;
