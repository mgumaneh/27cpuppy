import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = '2408-FTB-ET-WEB-AM';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;



const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }), // TODO: configure createApi to use API_URL as the base URL
  tagTypes: ['Puppy'], // TODO: add "Puppy" as a tag type.
  endpoints: (builder) => ({
    getAllPuppies: builder.query({
      query: () => '/players',
      providesTags: ['Puppy'],
    }),
    addPuppy: builder.mutation({
      query: (newPuppy) => ({
        url: 'players',
        method: 'POST',
        body: newPuppy,
      }),
      invalidatesTags: ['Puppy'],
    }),
    deletePuppy: builder.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Puppy'],
    }),
  }),


});

export const {
useGetAllPuppiesQuery,
useAddPuppyMutation,
useDeletePuppyMutation,
} = api

export default api;
