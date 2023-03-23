import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/store.js'


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})