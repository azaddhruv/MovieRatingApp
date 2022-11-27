import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialAuthState = {
  token: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.token = action.token
      state.isLoggedIn = true
      return state
    },
  },
})

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export const authActions = authSlice.actions
export default store
