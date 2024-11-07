import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface StyleObj {
    bgColor:string,
    dotColor: string
}

const initialState:StyleObj = {
    bgColor: "",
    dotColor: ""
};

const urlStyleSlice = createSlice({
    name:'urlStyle',
    initialState,
    reducers:{
        setBgColor: (state, action:PayloadAction<string>) =>{
            return {...state, bgColor: action.payload}
        },
        setDotColor: (state, action:PayloadAction<string>) =>{
            return {...state, dotColor: action.payload}
        },
    }
})

export const {setBgColor,setDotColor} = urlStyleSlice.actions;
export default urlStyleSlice.reducer;