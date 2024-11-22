import {  FaSquareCheck } from "react-icons/fa6"
import Header2 from "../Components/Header2"
import JakeCharacter from "../assets/JAKE-CARTOON.png"
 


const OurBenifits = ( ) => {
    
    const listItems:string[] = [
        'Fun Application',
        'Easy To Use',
        'Fast Downloads',
        'High Quality PNGs',
        'SVGs coming Soon!'
    ]

    return (
            <div className=" bg-white text-center md:text-left  w-full flex flex-wrap mx-auto min-h-40   p-8 md:p-16 md:pt-0">
                <div className="rounded-md md:w-5/12 w-full p-8 flex items-center justify-center bg-yellow-500 ">
                    <img src={JakeCharacter} alt="jacob cartoon version "/>
                </div>
                <div className="md:mt-0 mt-16 md:w-7/12 w-full flex justify-between flex-col bg-white md:px-16">
                    <Header2 h2Class={'text-3xl '} text={"Benefits of JakeQR"} innerIcon={undefined}/>

                    <p className="mt-6 md:mb-8 mb-16">By using my fun litte App, you can create  customized QR Codes w/ Logo to use with your respective link. Please note, this does need to be a live weblink. <br/><br/> <b className="text-lg">More features to be added soon!</b></p>

                <ul className="md:columns-2 bg-slate-900 rounded-lg text-white p-8">
                        {listItems.map((item)=>(
                            <li className=" md:text-xl flex items-center gap-4 py-2" id={item}> <FaSquareCheck className="text-yellow-500"/> {item} </li>
                        ))}
                    </ul>
                </div>
            </div>    
        )
}

export default OurBenifits