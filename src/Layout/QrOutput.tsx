import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeSVG } from "qrcode.react"
import qr from '../assets/qr code generator.png'

// type Props = {}

const QrOutput = () => {

const appUrl = useSelector((state:RootState)=>state.initialUrl); 

return (
    <>
        {appUrl.length > 0 && appUrl ? 
            <QRCodeSVG  value={appUrl}/> : 
            <img src={qr} alt="" className="w-1/3 md:w-1/2"/>
        }
        
    </>
)
}

export default QrOutput