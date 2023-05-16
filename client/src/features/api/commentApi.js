import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (data) => ({
        url: `/comment`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePostCommentMutation } = commentApi;
