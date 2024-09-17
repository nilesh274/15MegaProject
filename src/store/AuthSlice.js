import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null,
    post: 0
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log("Login action payload:", action.payload);
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;