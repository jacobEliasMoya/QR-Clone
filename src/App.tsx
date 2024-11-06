import ControlSection from "./Layout/ControlSection"
import Header from "./Layout/Header"
import OptionsControl from "./Layout/OptionsControl"
import QrOutput from "./Layout/QrOutput"

function App() {

  return (
    <>
      <Header />
      <div className="font-retro  w-full flex flex-wrap mx-auto min-h-40 rounded overflow-hidden p-4 md:p-8">
        <div className="md:w-2/3 w-full bg-zinc-200 p-8 order-2 md:order-1">
          <ControlSection />
          <hr/>
          <OptionsControl/>
        </div>
        <div className="md:w-1/3 w-full bg-zinc-100 p-8 flex items-center md:items-start justify-center order-1 md:order-2">
          <QrOutput/>
        </div>
      </div>
    </>
  )
}

export default App
