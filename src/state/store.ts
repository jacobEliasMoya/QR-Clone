import { configureStore } from "@reduxjs/toolkit";
import initialUrlReducer from "./UrlSlice/UrlSlice";

export const store = configureStore({
    reducer:{
        initialUrl: initialUrlReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;