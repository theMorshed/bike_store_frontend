import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { jwtDecode } from "jwt-decode";

export type TUser = {
    id: string;
    role: string;
    iat: number;
    exp: number;
}

type TAuthState = {
    user: TUser | null;
    token: string | null;
}

const token = localStorage.getItem("accessToken");

const initialState: TAuthState = {
    user: token ? jwtDecode<TUser>(token) : null,  // Decode token on page load
    token: token || null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { token } = action.payload;
            state.token = token;
            state.user = jwtDecode<TUser>(token);  // Decode and store user
            localStorage.setItem("accessToken", token); // Store in localStorage
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("accessToken"); // Clear token on logout
        }
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;