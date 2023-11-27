import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const combinedApi = createApi({
  reducerPath: 'combinedApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (build) => ({
    getPeople: build.query({
      query: (page = 1) => `people/?page=${page}`,
    }),
    getPlanets: build.query({
      query: (page = 1) => `planets/?page=${page}`,
    }),
    getStarships: build.query({
      query: (page = 1) => `starships/?page=${page}`,
    }),
  }),
});

export const { useGetPeopleQuery, useGetPlanetsQuery, useGetStarshipsQuery } = combinedApi;
export default combinedApi;