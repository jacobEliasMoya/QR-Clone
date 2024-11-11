import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import qrasset from "../../assets/yellow-happy-smile-face-emoticon-png.webp"

interface LogoStyles {
    useLogo:boolean,
    src: string,
    x: number | undefined,
    y: number |undefined,
    height: number,
    width: number,
    opacity: number,
    excavate: boolean,
}

const initialState:LogoStyles = {
    useLogo: true,
    src: qrasset,   
    x: undefined,
    y: undefined,
    height: 150,
    width: 150,
    opacity: 1,
    excavate: true,
}

const UrlLogoStyles = createSlice({
    name:'logostyles',
    initialState,
    reducers:{
        setLogoUrl: (state,action:PayloadAction<string>)=>{
        }
    },
})

export const {setLogoUrl} = UrlLogoStyles.actions
export default UrlLogoStyles.reducer