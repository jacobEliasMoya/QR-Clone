import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeSVG } from "qrcode.react"
import qr from '../assets/qr code generator.png'
import Header2 from "../Components/Header2";

// type Props = {}

const QrOutput = () => {

const appUrl = useSelector((state:RootState)=>state.initialUrl); 

return (
    <div className="flex w-full h-full flex-col text-center items-center gap-4">
        <Header2 h2Class={'text-2xl text-green-600'} text={appUrl} innerIcon={undefined}/>

        {appUrl.length > 0 && appUrl ? 
            <QRCodeSVG className="md:w-56 md:h-56 w-full h-full"  value={appUrl}/> : 
            <img src={qr} alt="" className="w-1/3 md:w-1/2"/>
        }
        
    </div>
)
}

export default QrOutput