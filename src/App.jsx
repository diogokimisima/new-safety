import { Banner } from "./components/banner"
import { Clients } from "./components/clients/clients"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Services } from "./components/services/services"
import { Sobre } from "./components/sobre"

function App() {

  return (
    <div className=" flex flex-col justify-center mx-auto relative">
      <Header/>
      <Banner />
      <div>
      <Sobre />
      <Services />
      <Clients />
      <Footer />
      </div>
    </div>
  )
}

export default App
