import Cliente2 from "../../assets/cliente2.jpg"
import Cliente3 from "../../assets/cliente3.png"
import Cliente1 from "../../assets/cliente1.jpg"
import Cliente4 from "../../assets/cliente4.jpg"
import Cliente5 from "../../assets/cliente5.jpg"
import Cliente6 from "../../assets/cliente6.jpg"
import Cliente7 from "../../assets/cliente7.jpg"
import Cliente8 from "../../assets/cliente8.jpg"
import Cliente9 from "../../assets/cliente9.jpg"
import Cliente10 from "../../assets/cliente10.jpg"
import Cliente11 from "../../assets/cliente11.jpg"
import Cliente12 from "../../assets/cliente12.jpg"

import { LogoClients } from "./logo-clients"

export function Clients() {
    return (
        <div className="space-y-10">
            <h2 className="text-emerald-950 mb-10 text-3xl text-center font-bold relative">
                CLIENTES
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto"></span>
            </h2>
            <div className="flex flex-wrap justify-center align-center gap-x-36 gap-y-5">
                <LogoClients image={Cliente1} />
                <LogoClients image={Cliente2} />
                <LogoClients image={Cliente3} />
                <LogoClients image={Cliente4} />
                <LogoClients image={Cliente5} />
                <LogoClients image={Cliente6} />
                <LogoClients image={Cliente7} />
                <LogoClients image={Cliente8} />
                <LogoClients image={Cliente9} />
                <LogoClients image={Cliente10} />
                <LogoClients image={Cliente11} />
                <LogoClients image={Cliente12} />
            </div>
        </div>
    )
}