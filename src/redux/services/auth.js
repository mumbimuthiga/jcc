// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const businessesApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://malika-registration.azurewebsites.net/api/v1/account/' }),
  endpoints: (builder) => ({
    loginUser: builder.query({
      query: (body) => `businesses`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserQuery } = businessesApi