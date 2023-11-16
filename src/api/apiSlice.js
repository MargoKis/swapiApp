import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: (page = 1) => `people/?page=${page}`,
    }),
  }),
});

export const { useGetPeopleQuery } = api;
export default api;
