import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
  }),
  tagTypes: ['Location'],
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => `/location`,
      providesTags: ['Location']
    }),
    getLocation: builder.query({
      query: (title) => `location/filter?title=${title}`,
    }),
    favoriteLocation: builder.mutation({
      query: (id) => ({
        url: `location/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ['Location'],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useFavoriteLocationMutation,
} = locationApi;
