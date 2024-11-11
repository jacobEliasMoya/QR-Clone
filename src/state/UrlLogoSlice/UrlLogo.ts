import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import qrasset from "../../assets/yellow-happy-smile-face-emoticon-png.webp"

interface LogoStyles {
    useLogo:boolean,
    src: string,
    x: number | undefined,
    y: number |undefined,
    dims: number,
    opacity: number,
    excavate: boolean,
}

const initialState:LogoStyles = {
    useLogo: true,
    src: qrasset,   
    x: undefined,
    y: undefined,
    dims: 150,
    opacity: 1,
    excavate: true,
}

const UrlLogoStyles = createSlice({
    name:'logostyles',
    initialState,
    reducers:{
        setLogoDims: (state,action:PayloadAction<number>)=>{
            return {...state,dims: action.payload}
        }
    },
})

export const {setLogoDims} = UrlLogoStyles.actions
export default UrlLogoStyles.reducer