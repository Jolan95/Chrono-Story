import { configureStore } from '@reduxjs/toolkit'
import userStore from '../store/user'


export const store = configureStore({
  reducer: {
    userStore
  },
})