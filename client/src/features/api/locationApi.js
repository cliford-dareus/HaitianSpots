import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Location"],
  endpoints: (builder) => ({
    getLocations: builder.query({
      query: () => `/location`,
      providesTags: ["Location"],
    }),
    getLocationById: builder.query({
      query: (id) => `/location/${id}`,
    }),
    addLocation: builder.mutation({
      query: (data) => ({
        url: `location`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Location"],
    }),
    getLocation: builder.query({
      query: (title) => `location/filter?title=${title}`,
    }),
    favoriteLocation: builder.mutation({
      query: (id) => ({
        url: `location/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Location"],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationByIdQuery,
  useGetLocationQuery,
  useFavoriteLocationMutation,
  useAddLocationMutation,
} = locationApi;
