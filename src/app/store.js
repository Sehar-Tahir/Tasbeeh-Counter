// step 1 ;-

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/Counter/counterSlice'

export const store = configureStore({
    // step 4 ;-
  reducer: {
    counter: counterReducer,
  },
})