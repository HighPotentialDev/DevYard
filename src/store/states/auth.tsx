import { createSlice } from "@reduxjs/toolkit";

const authState = createSlice({
    name: "Auth State",
    initialState: {},
    reducers: {
        openLogin: (_state, action) => {
            return _state = action.payload;
        },
        
        openSignup: (_state, action) => {
            return _state = action.payload;
        }
    }
})

export default authState.reducer;
export const { openLogin, openSignup } = authState.actions;