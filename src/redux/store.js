import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './categorySlice'
import eventSlice from './eventSlice'
import tokenSlice from './tokenSlice'

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    events: eventSlice,
    token: tokenSlice
  },
})