import Header from "./Layout/Header"
import KeyItems from "./Components/KeyItems"
import QrSection from "./Layout/QrSection"
import TrustedBySection from "./Layout/TrustedBySection"
import OurBenifits from "./Layout/OurBenifits"

function App() {

  return (
    <div className="font-retro">
      <Header />
      <QrSection />
      <KeyItems/>
      <TrustedBySection/>
      <OurBenifits/>
    </div>
  )
}

export default App
