import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface LogoStyles {
    src: string,
    x: number | undefined,
    y: number |undefined,
    height: number,
    width: number,
    opacity: number,
    excavate: boolean,
}

const initialState:LogoStyles = {
    src: '',
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    opacity: 1,
    excavate: true,
}

const UrlLogoStyles = createSlice({
    name:'',
    initialState,
    reducers:{
        setLogoUrl: (state,action:PayloadAction<string>)=>{
        }
    },
})

export const {setLogoUrl} = UrlLogoStyles.actions