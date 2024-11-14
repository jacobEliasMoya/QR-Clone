import { useDispatch, useSelector } from "react-redux";
import { setLogoImage } from "../state/UrlLogoSlice/UrlLogo";
import { RootState } from "../state/store";
import { useEffect } from "react";

const FileUpload = () => {

    const dispatch = useDispatch();
    const logoStyle = useSelector((state:RootState) => state.logoStyles)

    const handleFileUpload = (e: any) =>{
        // console.log( URL.createObjectURL(e.target.files[0])) 
        dispatch(setLogoImage(URL.createObjectURL(e.target.files[0])))
    }

    useEffect(()=>{
        console.log(logoStyle)
    },[logoStyle])

    return (
        <>  
            <input type='file' className="border-0 p-4 bg-zinc-200  hover:bg-zinc-100 h-auto gap-2 mt-4 w-full max-w-full min-w-full" onChange={handleFileUpload} />
        </>
    )
}

export default FileUpload