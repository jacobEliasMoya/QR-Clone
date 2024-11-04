import qrImg from "../assets/qr code generator.png"
import Header1 from "../Components/Header1"


const Header = () => {
  return (
    <header className="flex shadow font-retro2 white text-center p-4 rounded items-center justify-center">
         <div className="w-10/12">
          <img src={qrImg} alt="" className="max-h-14 rounded-lg scale-100 hover:scale-105 transition-all cursor-pointer"/>
        </div>
        <div className=" w-2/12">
            <Header1 h1Class={"font-bold text-xl uppercase"} text={"Jakes QR"}/>
        </div>
    </header>

  )
}

export default Header