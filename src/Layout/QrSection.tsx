import ControlSection from './ControlSection'
import OptionsControl from './OptionsControl'
import QrOutput from './QrOutput'


const QrSection = () => {
  return (
        <div className=" bg-slate-900  w-full flex flex-wrap mx-auto min-h-40   p-8 md:p-16 pb-32 md:pb-44 md:pt-28">
            <div className="md:w-2/3 w-full bg-zinc-100 p-8 ">
                <ControlSection />
                <hr/>
                <OptionsControl/>
            </div>
            <div className=" md:w-1/3 w-full bg-zinc-200">
                <QrOutput/>
            </div>
        </div>
    )
}

export default QrSection