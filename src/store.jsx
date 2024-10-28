import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import signupReducer from './SignupSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        signup: signupReducer,
    },
});

export default store;