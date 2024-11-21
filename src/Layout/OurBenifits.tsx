import Header2 from "../Components/Header2"
import JakeCharacter from "../assets/JAKE-CARTOON.png"
 
const OurBenifits = ( ) => {
  return (
        <div className=" bg-white text-center md:text-left  w-full flex flex-wrap mx-auto min-h-40   p-8 md:p-16 md:pt-0">
            <div className="rounded-md md:w-5/12 w-full p-8 flex items-center justify-center bg-slate-100 ">
                <img src={JakeCharacter} alt="jacob cartoon version "/>
            </div>
            <div className=" md:w-7/12 w-full bg-white p-8 px-16">
                <Header2 h2Class={'text-2xl mb-4'} text={"Benefits of JakeQR"} innerIcon={undefined}/>

                By using my fun litte App, you can create fully customized QR Codes w/ Logo to use with your respective link. Please note, this does need to be a live weblink. More features to be added soon!

            </div>
        </div>    
    )
}

export default OurBenifits