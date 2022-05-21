/* eslint-disable no-param-reassign */

import { createSlice } from "@reduxjs/toolkit";
import storage from "../Utils/storage";

const initialState = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { payload } = action;
            state = payload;
            storage.set("user", payload);
        },
    },
});

const { actions, reducer: userReducer } = userSlice;

export const { setUser, setTokens } = actions;

export default userReducer;
