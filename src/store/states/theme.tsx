import { createSlice } from "@reduxjs/toolkit";

const themeState = createSlice({
    name: "Theme State",
    initialState: "light",
    reducers: {
        setTheme: (_state, action) => {
            return _state = action.payload;
        }
    }
})
export default themeState.reducer;
export const { setTheme } = themeState.actions;