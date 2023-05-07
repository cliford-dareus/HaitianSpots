import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: (builder) => ({
        
    })
})