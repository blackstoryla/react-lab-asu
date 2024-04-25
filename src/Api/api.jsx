import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
      getTodos: builder.query({
        query: (id) => `/users/${id}/todos`,
        // method: 'GET',
      }),
    }),
  })

  export const { useGetTodosQuery } = api