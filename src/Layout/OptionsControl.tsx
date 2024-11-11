// import React from 'react'
import { useEffect, useState } from 'react';
import Header3 from '../Components/Header3';
import { FaGear } from "react-icons/fa6";
import { CirclePicker } from 'react-color';
import Input from '../Components/Input';
import RegButton from '../Components/RegButton';
import { useDispatch, useSelector } from 'react-redux';
import {setBgColor,setDotColor, setQrMargin} from '../state/UrlStyles/UrlStyles'
import {setLogoDims} from '../state/UrlLogoSlice/UrlLogo'
import { RootState } from '../state/store';

const OptionsControl = () => {
    
    const dispatch = useDispatch();
    const  appStyles = useSelector((state:RootState) => state.qrStyles);
    const  logoStyles = useSelector((state:RootState) => state.logoStyles);

    const [isExpanded,setIsExpanded] = useState<boolean>(false);
    const [customHex,setCustomHex] = useState<string>()
    const [customDot,setCustomDot] = useState<string>()
    const [customMargin,setCustomMargin] = useState<number>()
    const [customLogoSize,setCustomLogoSize] = useState<number>()

    const handleCustomHex = (e:any) => { 
        setCustomHex(e.target.value)
    }

    const handleCustomDot = (e:any) => { 
        setCustomDot(e.target.value)
    }

    const handleCustomMargin = (e:any) => { 
        setCustomMargin(e.target.value)
    }

    const handleBgChange = (e:any) =>{
        dispatch(setBgColor(e.hex))
    }

    const handleDotChange = (e:any) =>{
        dispatch(setDotColor(e.hex))
    }

    const handleMarginChange = (e:any) => {
        dispatch(setQrMargin(e.target.value))
    }

    const handleLogoSizeChange = (e:any) => {
        dispatch(setLogoDims(e.target.value))
    }

    const customLogoSizeChange = (e:any) => {
        setCustomLogoSize(e.target.value)
    }

    const handleChange = () =>{
        setIsExpanded(prev=>!prev);
    }

    useEffect(()=>{
        customHex ? dispatch(setBgColor(customHex)) : "" ;
    },[customHex])

    useEffect(()=>{
        customDot ? dispatch(setDotColor(customDot)) : "" ;
    },[customDot])
    
    useEffect(()=>{
        customMargin ? dispatch(setQrMargin(customMargin)) : "" ;
    },[customMargin])

    useEffect(()=>{
        customLogoSize ? dispatch(setLogoDims(customLogoSize)) : "" ;
    },[customLogoSize])

  return (

    <div className='w-full p-4 bg-white rounded mt-4'>

        <RegButton buttonText={'Options'} buttonClick={handleChange} additionalClasses={`w-full text-left flex items-center gap-4 md:justify-start justify-center ${!isExpanded ? ' mb-4 ' : ''}`} buttonIcon={<FaGear />} isDownload={false} buttonLink={undefined}/> 

        <div className= {isExpanded ?'w-full transition-all p-0 max-h-fit'  : 'w-full transition-all p-0 max-h-0 overflow-hidden' }>
           

            <Header3 h3Class={'mt-4 text-blue-500 flex items-center gap-2 text-xl'} text={'Color:'} innerIcon={undefined} />
        
            <Header3 h3Class={'  flex items-center gap-2 mt-2 '} text={'Background Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-saart justify-between ">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleCustomHex} inputPlaceholder={'#ffffff'} rangeMin={undefined} rangeMax={undefined} rangeValue={undefined} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker 
                        circleSize={23} 
                        width='100%' 
                        circleSpacing={5}
                        onChangeComplete={handleBgChange}
                    />
                </div>
            </div>    

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Dots Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleCustomDot} inputPlaceholder={'#ffffff'} rangeMin={undefined} rangeMax={undefined} rangeValue={undefined} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker 
                        circleSize={23} 
                        width='100%' 
                        circleSpacing={5}
                        onChangeComplete={handleDotChange}
                    />
                </div>
            </div>    

            <hr className='mt-5'/>

            <Header3 h3Class={'mt-4 text-blue-500 flex items-center gap-2 text-xl'} text={'Spacing:'} innerIcon={undefined} />

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'QR Margin'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/2 p-2">
                    <Input inputType={'number'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleCustomMargin} inputPlaceholder={'0'} rangeMin={undefined} rangeMax={undefined} rangeValue={appStyles.qrMargin} />
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <Input inputType={'range'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleMarginChange} inputPlaceholder={'#ffffff'} rangeMin={0} rangeMax={50} rangeValue={appStyles.qrMargin} />
                </div>
            </div>    
            
            <hr className='mt-5'/>

            <Header3 h3Class={'mt-4 text-blue-500 flex items-center gap-2 text-xl'} text={'Logo:'} innerIcon={undefined} />

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Logo Size'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-1/2 p-2">
                    <Input inputType={'number'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={customLogoSizeChange} inputPlaceholder={'0'} rangeMin={0} rangeMax={150} rangeValue={logoStyles.dims} />
                </div>

                <div className="w-full md:w-1/2 p-2">
                    <Input inputType={'range'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleLogoSizeChange} inputPlaceholder={'#ffffff'} rangeMin={0} rangeMax={150} rangeValue={logoStyles.dims} />
                </div>
            </div>    

            {/* <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Marker Central Color'} innerIcon={undefined} />
            
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-2/3 p-2  ">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={undefined} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker circleSize={25} width='100%' circleSpacing={5}/>
                </div>
            </div> */}

        </div>

    </div>
  )
}

export default OptionsControl