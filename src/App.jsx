import { Clients } from "./components/clients/clients"
import { Header } from "./components/header"
import { Services } from "./components/services/services"

function App() {

  return (
    <div className="max-w-[1440px] flex flex-col justify-center mx-auto relative">
      <Header/>
      <Services />
      <Clients />
    </div>
  )
}

export default App
