// import React from 'react'
import { useEffect, useState } from 'react';
import Header3 from '../Components/Header3';
import { FaGear } from "react-icons/fa6";
import { CirclePicker } from 'react-color';
import Input from '../Components/Input';
import RegButton from '../Components/RegButton';
import { useDispatch } from 'react-redux';
import {setBgColor,setDotColor} from '../state/UrlStyles/UrlStyles'

const OptionsControl = () => {
    
    const dispatch = useDispatch();

    const [isExpanded,setIsExpanded] = useState<boolean>(false);
    const [customHex,setCustomHex] = useState<string>()
    const [customDot,setCustomDot] = useState<string>()

    const handleCustomHex = (e:any) => { 
        setCustomHex(e.target.value)
    }

    const handleCustomDot = (e:any) => { 
        setCustomDot(e.target.value)
    }

    const handleBgChange = (e:any) =>{
        dispatch(setBgColor(e.hex))
    }

    const handleDotChange = (e:any) =>{
        dispatch(setDotColor(e.hex))
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
    
  return (

    <div className='w-full p-4 bg-white rounded mt-4'>

        <RegButton buttonText={'Options'} buttonClick={handleChange} additionalClasses={`w-full text-left flex items-center gap-2${!isExpanded ? ' mb-4 ' : ''}`} buttonIcon={<FaGear/>}/> 

        <div className= {isExpanded ?'w-full transition-all p-0 max-h-fit'  : 'w-full transition-all p-0 max-h-0 overflow-hidden' }>
           

            <Header3 h3Class={'mt-4 text-blue-500 flex items-center gap-2 text-xl'} text={'Color:'} innerIcon={undefined} />
        
            <Header3 h3Class={'  flex items-center gap-2 mt-2 '} text={'Background Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-saart justify-between ">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleCustomHex} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker 
                        circleSize={25} 
                        width='100%' 
                        circleSpacing={5}
                        onChangeComplete={handleBgChange}
                    />
                </div>
            </div>    

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Dots Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={handleCustomDot} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker 
                        circleSize={25} 
                        width='100%' 
                        circleSpacing={5}
                        onChangeComplete={handleDotChange}
                    />
                </div>
            </div>    

            {/* <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Marker Border Color'} innerIcon={undefined} />
            
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={undefined} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker circleSize={25} width='100%' circleSpacing={5}/>
                </div>
            </div>        
            
            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Marker Central Color'} innerIcon={undefined} />
            
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