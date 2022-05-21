import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Common/Slices/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
