import { Banner } from "./components/banner"
import { Clients } from "./components/clients/clients"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Services } from "./components/services/services"
import { About } from "./components/about"

function App() {

  return (
    <div className=" flex flex-col justify-center mx-auto relative">
      <Header/>
      <div className="space-y-20">
      <Banner/>
      <About  />
      <Services id="services" />
      <Clients id="clients" />
      <Footer />
      </div>
    </div>
  )
}

export default App
