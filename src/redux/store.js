import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { businessesApi } from './services/businesses'
import { landApi } from './services/land'
import { payerApi } from './services/payers'

const store = configureStore({
  reducer: {
    
    // Add the generated reducer as a specific top-level slice
    [businessesApi.reducerPath]: businessesApi.reducer,
    [landApi.reducerPath]: landApi.reducer,
    [payerApi.reducerPath]:payerApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(businessesApi.middleware,landApi.middleware, payerApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export default store