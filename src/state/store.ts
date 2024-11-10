import { configureStore } from "@reduxjs/toolkit";
import initialUrlReducer from "./UrlSlice/UrlSlice";
import qrStyleReducer from "./UrlStyles/UrlStyles"
import logoStyleReducer from "./UrlLogoSlice/UrlLogo"

export const store = configureStore({
    reducer:{
        initialUrl: initialUrlReducer,
        qrStyles: qrStyleReducer,
        logoStyles: logoStyleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;