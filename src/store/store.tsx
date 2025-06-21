import authState from "./states/auth"
import themeState from "./states/theme"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        authState,
        themeState
    }
})

export default store;