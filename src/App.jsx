import { Banner } from "./components/banner"
import { Clients } from "./components/clients/clients"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Services } from "./components/services/services"
import { About } from "./components/about"
import { Contact } from "./components/contact"

function App() {

  return (
    <div id="inicio" className="flex flex-col justify-center mx-auto relative">
      <Header />

      <div className="space-y-20 mt-20">
        <div >
          <Banner />
        </div>

        <div id="about">
          <About />
        </div>

        <div>
          <Services />
        </div>

        <div id="clients">
          <Clients />
        </div>

        <div>
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
