import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload

    },
    logoutSuccess: (state) => {
      state.user = null
    },
  },
})

export const { loginSuccess, logoutSuccess } = userSlice.actions

export const selectUser = (state) => state.user.user

export default userSlice.reducer