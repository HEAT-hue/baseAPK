import { createSlice } from "@reduxjs/toolkit"

// Define the type for the AuthState
type AuthStateType = {
    token?: string | null
    admin: {} | null
    user: {} | null
}

// Define the initial state
const initialState: AuthStateType = {
    token: null,
    admin: null,
    user: null
}

// Create the Auth Slice
const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Set user / admin state to null, all protected routes will redirect to login pages
        logout: (state) => {
            state.user = null
            state.admin = null
            state.token = null
        }
    },
    extraReducers: (builder) => { }
})

// Export Slice Reducer
export const AuthSliceReducer = AuthSlice.reducer;

// Export Auth Slice Actions
export const AuthSliceActions = AuthSlice.actions;