// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const businessesApi = createApi({
  reducerPath: 'businessesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://malika-registration.azurewebsites.net/api/v1/account/' }),
  endpoints: (builder) => ({
    getAllBusinesses: builder.query({
      query: () => `/businesses`,
    }),
    getBusiness: builder.query({
        query: (id) => `/business/${id}`,
      }),
    registerBusiness:builder.mutation({
        query:(business)=>({
            url:`/registerBusiness`,
            method:"POST",
            body:business
        })
    }),
    updateBusiness:builder.mutation({
        query:({id,...rest})=>({
            url:`/updateBusiness/${id}`,
            method:"PUT",
            body:rest
        })
    }),
    deleteBusiness:builder.mutation({
        query:({id})=>({
            url:`/deleteBusiness/${id}`,
            method:"DELETE",
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBusinessesQuery, useRegisterBusinessMutation, useUpdateBusinessMutation, useDeleteBusinessMutation} = businessesApi