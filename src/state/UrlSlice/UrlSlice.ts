import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState:string = '';

// url slice, will get from input in 
const initialUrlSlice = createSlice({
    name: "URL",
    initialState,
    reducers:{
        setInitialUrl: (state, action:PayloadAction<string>) =>{
            return state = action.payload 
        },
    }
})

export const {setInitialUrl} = initialUrlSlice.actions;
export default initialUrlSlice.reducer; 