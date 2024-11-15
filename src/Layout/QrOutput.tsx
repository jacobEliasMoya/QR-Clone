import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { QRCodeCanvas } from "qrcode.react"
import Header2 from "../Components/Header2";
import { useEffect, useState } from "react";
import RegButton from "../Components/RegButton";
import { FaDownload } from "react-icons/fa6";
import placeholder from "../assets/yellow-happy-smile-face-emoticon-png.webp";

const QrOutput = () => {

    const appUrl = useSelector((state:RootState)=>state.initialUrl); 
    const qrStyles = useSelector((state:RootState)=>state.qrStyles);
    const qrLogo = useSelector((state:RootState)=>state.logoStyles);

    const [initialSvg, setInitialSVG] = useState<any>();
    const [mainSvg, setSVG] = useState<any>();
    const [mainUrl, setMainUrl] = useState<string>();


    const handleInitialSvg = () =>{
        let x = document.querySelector('#svg')
        setInitialSVG(x)
    }    

    const handleSVG = () =>{
        let x = document.querySelector('#svg')
        setSVG(x)
    }

    const handleUrlSet = () =>{
        return new Promise((resolve,reject) => { 
            setTimeout(() => {
                qrLogo.src !=  placeholder ? resolve(true) : reject(false);
            }, 500);
        })
    }

    useEffect(()=>{

        handleUrlSet()
            .then((res)=>{
                res ? handleSVG() : null
            })
            .catch((err)=>{
                console.log(err)
            })

    },[appUrl,qrStyles,qrLogo])

    useEffect(()=>{
        mainSvg ? setMainUrl(mainSvg.toDataURL()) : null ;
    },[mainSvg])

    useEffect(()=>{
        handleInitialSvg()    
    },[])

    useEffect(()=>{
        initialSvg ? setMainUrl(initialSvg.toDataURL()) : null ;
    },[initialSvg])

    return (
        <div className="min-h-full">
            <div className="w-full h-full md:h-min block sticky top-0  p-8 "    >
                
                <Header2 h2Class={ `tracking-widest text-center mb-4 text-2xl text-green-600 ${appUrl.length > 0 && appUrl ? "": "hidden "}` } text={ appUrl.length > 0 && appUrl ? appUrl : '' } innerIcon={ undefined }/>

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