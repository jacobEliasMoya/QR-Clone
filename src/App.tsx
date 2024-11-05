import ControlSection from "./Layout/ControlSection"
import Header from "./Layout/Header"
import QrOutput from "./Layout/QrOutput"

function App() {

  return (
    <>
      <Header />
      <div className="font-retro md:w-7/12 w-11/12 flex flex-wrap mx-auto min-h-40 mt-8 rounded overflow-hidden">
        <div className="md:w-2/3 w-full bg-zinc-200 p-8">
          <ControlSection />
        </div>
        <div className="md:w-1/3 w-full bg-zinc-100 p-8 flex items-center justify-center">
          <QrOutput/>
        </div>
      </div>
    </>
  )
}

export default App
