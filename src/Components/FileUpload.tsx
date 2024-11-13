import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { setLogoImage } from "../state/UrlLogoSlice/UrlLogo";

const FileUpload = () => {

    const dispatch = useDispatch();

    const handleFileUpload = (e: any) =>{
        let x:string = URL.createObjectURL(e);
        dispatch(setLogoImage(x))
    }

    return (
        <>  
            <FileUploader hoverTitle="" classes="border-0 p-4 bg-zinc-100 h-auto gap-2 mt-4 w-full max-w-full min-w-full" handleChange={handleFileUpload} />
        </>
    )
}

export default FileUpload