import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id)=> `/comment/${id}`,
      providesTags: ['Comment']
    }),
    postComment: builder.mutation({
      query: (data) => ({
        url: `/comment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Comment']
    }),
  }),
});

export const { usePostCommentMutation, useGetCommentsQuery } = commentApi;
