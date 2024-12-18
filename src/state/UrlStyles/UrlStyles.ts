import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface StyleObj {
    bgColor:string,
    dotColor: string,
    qrMargin: number,
    initialSize: {
        sm: number,
        md: number,
        lg: number 
    },
    downloadSize: number,

}

const initialState:StyleObj = {
    bgColor: "",
    dotColor: "",
    qrMargin: 1,
    initialSize: {
        sm: 250,
        md: 400,
        lg: 768
    },
    downloadSize: 1500,
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
        setQrMargin: (state, action:PayloadAction<number>) =>{
            return {...state, qrMargin: action.payload}
        }
    }
})

export const {setBgColor,setDotColor,setQrMargin} = urlStyleSlice.actions;
export default urlStyleSlice.reducer;