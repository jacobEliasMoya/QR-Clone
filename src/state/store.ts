import { configureStore } from "@reduxjs/toolkit";
import initialUrlReducer from "./UrlSlice/UrlSlice";
import qrStyleReducer from "./UrlStyles/UrlStyles"

export const store = configureStore({
    reducer:{
        initialUrl: initialUrlReducer,
        qrStyles: qrStyleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;