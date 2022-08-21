// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const landApi = createApi({
  reducerPath: 'landApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://malika-registration.azurewebsites.net/api/v1/account/' }),
  endpoints: (builder) => ({
    getAllLand: builder.query({
      query: () => `/lands`,
    }),
    getLand: builder.query({
        query: (id) => `/land/${id}`,
      }),
    registerLand:builder.mutation({
        query:(land)=>({
            url:`/registerLand`,
            method:"POST",
            body:land
        })
    }),
    updateLand:builder.mutation({
        query:({id,...rest})=>({
            url:`/updateLand/${id}`,
            method:"PUT",
            body:rest
        })
    }),
    deleteLand:builder.mutation({
        query:({id})=>({
            url:`/deleteLand/${id}`,
            method:"DELETE",
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllLandQuery, useGetLandQuery, useRegisterLandMutation, useUpdateLandMutation } = landApi