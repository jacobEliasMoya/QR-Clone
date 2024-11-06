// import React from 'react'
import { useEffect, useState } from 'react';
import Header2 from '../Components/Header2'
import Header3 from '../Components/Header3';
import { FaGear } from "react-icons/fa6";
import { CirclePicker } from 'react-color';
import Input from '../Components/Input';
import RegButton from '../Components/RegButton';

// type Props = {}

const OptionsControl = () => {
    
    const [isExpanded,setIsExpanded] = useState<boolean>(false);

    const handleChange = () =>{
        setIsExpanded(prev=>!prev);
    }

    useEffect(()=>{
        console.log(isExpanded)
    },[isExpanded])

  return (
    <div className='w-full p-4 bg-white rounded mt-4'>

        <RegButton buttonText={'Options'} buttonClick={handleChange} additionalClasses={`w-full text-left flex items-center gap-2${!isExpanded ? ' mb-4 ' : ''}`} buttonIcon={<FaGear/>}/> 

        <div className= {isExpanded ?'w-full transition-all p-0 max-h-fit'  : 'w-full transition-all p-0 max-h-0 overflow-hidden' }>
           

            <Header3 h3Class={'mt-4 text-blue-500 flex items-center gap-2 text-xl'} text={'Color: < currently not working >'} innerIcon={undefined} />
        
            <Header3 h3Class={'  flex items-center gap-2 mt-2 '} text={'Background Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between ">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={undefined} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker circleSize={25} width='100%' circleSpacing={5}/>
                </div>
            </div>    

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Dots Color'} innerIcon={undefined} />

            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full md:w-2/3 p-2">
                    <Input inputType={'text'} inputId={'qr-color'} inputName={'qr-color'} inputOnchange={undefined} inputPlaceholder={'#ffffff'} />
                </div>
                <div className="w-full md:w-1/3 p-2">
                    <CirclePicker circleSize={25} width='100%' circleSpacing={5}/>
                </div>
            </div>    

            <Header3 h3Class={'  flex items-center gap-2 mt-4'} text={'Marker Border Color'} innerIcon={undefined} />
            
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
            </div>

        </div>

    </div>
  )
}

export default OptionsControl