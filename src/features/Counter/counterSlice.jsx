// step 3 ;-

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState : {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    reset: (state) => {
        state.value = 0
      },

  },
})

// Action creators are generated for each case reducer function
export const {increment, reset} = counterSlice.actions
export default counterSlice.reducer


 // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes