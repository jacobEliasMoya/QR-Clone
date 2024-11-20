import { createSlice,PayloadAction } from "@reduxjs/toolkit";

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
    src: '',   
    x: undefined,
    y: undefined,
    dims: 100,
    opacity: 1,
    excavate: true,
}

const UrlLogoStyles = createSlice({
    name:'logostyles',
    initialState,
    reducers:{
        setXOffset : (state,action:PayloadAction<number>) =>{
            return {...state, x:action.payload}
        },
        setYOffset : (state,action:PayloadAction<number>) =>{
            return {...state, y:action.payload}
        },
        setLogoImage: (state, action:PayloadAction<string>)=>{
            return {...state,src: action.payload}
        },
        setLogoDims: (state, action:PayloadAction<number>)=>{
            return {...state,dims: action.payload}
        }
    },
})

export const {setLogoDims,setLogoImage, setXOffset} = UrlLogoStyles.actions
export default UrlLogoStyles.reducer