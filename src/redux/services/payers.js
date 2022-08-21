// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const payerApi = createApi({
  reducerPath: 'payerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://malika-registration.azurewebsites.net/api/v1/account/' }),
  endpoints: (builder) => ({
    getAllPayers: builder.query({
      query: () => `/payers`,
    }),
    getPayer: builder.query({
        query: (id) => `/payer/${id}`,
      }),
    registerPayer:builder.mutation({
        query:(payer)=>({
            url:`/registerPayer`,
            method:"POST",
            body:payer
        })
    }),
    updatePayer:builder.mutation({
        query:({id,...rest})=>({
            url:`/updatePayer/${id}`,
            method:"PUT",
            body:rest
        })
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPayersQuery, useGetPayerQuery, useUpdatePayerMutation, useRegisterPayerMutation } = payerApi