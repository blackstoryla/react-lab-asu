import { configureStore } from '@reduxjs/toolkit'
// import { reducer } from './reduser';
import { api } from '../Api/api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)