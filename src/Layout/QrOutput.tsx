import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeSVG } from "qrcode.react"
import Header2 from "../Components/Header2";

const QrOutput = () => {

const appUrl = useSelector((state:RootState)=>state.initialUrl); 
const qrBackground = useSelector((state:RootState)=>state.qrStyles);

return (
    <div className="flex w-full h-full flex-col text-center items-center gap-4">
        <Header2 h2Class={ 'text-2xl text-green-600' } text={ appUrl.length > 0 && appUrl ? appUrl : '' } innerIcon={ undefined }/>
        <QRCodeSVG marginSize={2} fgColor={ qrBackground.dotColor.length > 0 ? qrBackground.dotColor : '#0f172a' } bgColor={ qrBackground.bgColor.length > 0 ? qrBackground.bgColor : '#ffffff' } className="rounded-lg md:w-56 md:h-56 w-full h-full"  value={ appUrl.length > 0 && appUrl ? appUrl : '' } />
    </div>
)
}

export default QrOutput