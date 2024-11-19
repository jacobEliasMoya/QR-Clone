import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeCanvas } from "qrcode.react"
import Header2 from "../Components/Header2";
import { useEffect, useState } from "react";
import RegButton from "../Components/RegButton";
import { FaDownload } from "react-icons/fa6";

const QrOutput = () => {

    const appUrl = useSelector((state:RootState)=>state.initialUrl); 
    const qrStyles = useSelector((state:RootState)=>state.qrStyles);
    const qrLogo = useSelector((state:RootState)=>state.logoStyles);

    const [mainSvg, setSVG] = useState<any>();
    const [mainUrl, setMainUrl] = useState<string>();

    // when items are updated, then there needs to be a snap shot after those changes []

    const handleSVG = () =>{
        setSVG(document.querySelector('#svg'))
    }

    const handleUrlSet = () =>{
        return new Promise((resolve,reject) => { 
            setTimeout(() => {
                mainSvg ? resolve(true) : reject(false);
            }, 500);
        })
    }

    useEffect(()=>{
        handleUrlSet()
            .then((res)=>{  
                res ? setMainUrl(mainSvg.toDataURL()): ''
            })
            .catch(()=>{
                console.log('err')
            })
            .finally(()=>{
                console.log('done')
            })

    },[appUrl,qrStyles,qrLogo])

    useEffect(()=>{
        handleSVG()
    },[mainSvg]) 

    return (
        <div className="min-h-full">
            <div className="w-full h-full md:h-min block sticky top-0  p-8 "    >
                
                <Header2 h2Class={ `tracking-widest text-center mb-4 text-2xl text-green-600 break-all ${appUrl.length > 0 && appUrl ? "": "hidden  "}` } text={ appUrl.length > 0 && appUrl ? appUrl : '' } innerIcon={ undefined }/>

                <QRCodeCanvas 

                    imageSettings={{
                        src: qrLogo.src,
                        x: undefined,
                        y: undefined,
                        height: qrLogo.dims,
                        width: qrLogo.dims,
                        opacity: 1,
                        excavate: true,
                    }}

                size={qrStyles.initialSize.lg} id="svg" title={`${appUrl} Generated QR `} marginSize={qrStyles.qrMargin} fgColor={ qrStyles.dotColor.length > 0 ? qrStyles.dotColor : '#0f172a' } bgColor={ qrStyles.bgColor.length > 0 ? qrStyles.bgColor : '#ffffff' } className="w-full h-full   transition-all" value={ appUrl.length > 0 && appUrl ? appUrl : '' } />

                <RegButton buttonText={'Download PNG'} buttonClick={undefined} additionalClasses={`w-full text-left  items-center gap-4 md:justify-start justify-center ${appUrl ? 'flex':'hidden'}`} buttonIcon={<FaDownload/>} isDownload={true} buttonLink={mainUrl ? mainUrl : ''}/> 


            </div>
        

        </div>
    )
}

export default QrOutput