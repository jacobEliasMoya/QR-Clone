import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeCanvas } from "qrcode.react"
import Header2 from "../Components/Header2";
import { useEffect, useState } from "react";
import domtoimage from 'dom-to-image';
import RegButton from "../Components/RegButton";
import { FaDownload } from "react-icons/fa6";


const QrOutput = () => {

    const appUrl = useSelector((state:RootState)=>state.initialUrl); 
    const qrStyles = useSelector((state:RootState)=>state.qrStyles);
    const qrLogo = useSelector((state:RootState)=>state.logoStyles);


    const [mainSvg, setSVG] = useState<any>();
    const [mainUrl, setMainUrl] = useState<string>();

    const handleSVG = () =>{
        setSVG(document.querySelector('#svg'))
    }
    
    useEffect(()=>{ 
        handleSVG()
         if(mainSvg){
            domtoimage.toPng(mainSvg)
            .then((dataURL)=>{
                setMainUrl(dataURL)
            })
            .catch((error) => {
              console.error('Error converting DOM to image:', error);
            });
        }
    },[qrStyles,appUrl])

    return (
        <div className=" flex w-full h-full flex-col text-center items-center gap-4 ">
            <Header2 h2Class={ ' text-2xl text-green-600 ' } text={ appUrl.length > 0 && appUrl ? appUrl : '' } innerIcon={ undefined }/>

            <div className=" w-full h-full md:h-min block">
                <QRCodeCanvas 

                imageSettings={{
                    src: qrLogo.src,
                    x: undefined,
                    y: undefined,
                    height: 140,
                    width: 140,
                    opacity: 1,
                    excavate: true,
                }}

                 size={qrStyles.initialSize} id="svg"  title={`${appUrl} Generated QR `} marginSize={qrStyles.qrMargin} fgColor={ qrStyles.dotColor.length > 0 ? qrStyles.dotColor : '#0f172a' } bgColor={ qrStyles.bgColor.length > 0 ? qrStyles.bgColor : '#ffffff' } className="w-full h-full   transition-all" value={ appUrl.length > 0 && appUrl ? appUrl : '' } />
            </div>
        
            <RegButton buttonText={'Download PNG'} buttonClick={undefined} additionalClasses={`w-full text-left  items-center gap-4 md:justify-start justify-center ${appUrl ? 'flex':'hidden'}`} buttonIcon={<FaDownload/>} isDownload={true} buttonLink={mainUrl ? mainUrl : ''}/> 

        </div>
    )
}

export default QrOutput