import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggein: false,
    user_role: null,
    token: null,
    userData: {}
}

const AuthSlice = createSlice ({

    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.userData = action.payload.user
            state.token = action.payload.access_token
            state.user_role = action.payload.user_role
            state.isLoggein = !state.isLoggein
            localStorage.setItem('token', action.payload.access_token)
        }
    }
})


export const { login } = AuthSlice.actions

export default AuthSlice.reducer