import ControlSection from "./Layout/ControlSection"
import Header from "./Layout/Header"

function App() {

  return (
    <>
      <Header />
      <div className="font-retro w-7/12 flex mx-auto min-h-40 mt-8 rounded overflow-hidden">
        <div className="w-2/3 bg-zinc-200 p-4">
          <ControlSection />
        </div>
        <div className="w-1/3 bg-zinc-100 p-4">test</div>
      </div>
    </>
  )
}

export default App
