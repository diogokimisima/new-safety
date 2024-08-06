import { CardServices } from "./card-services";

export function Services() {
    return (
        <div className="flex flex-wrap justify-center align-center gap-4">
            <CardServices
                title="Missão"
                description="Fornecer soluções de saúde e segurança, com base nas normalizações exigidas, assegurando a integridade física dos colaboradores, atendendo a necessidade do cliente"
            />

            <CardServices
                title="Visão"
                description="Ser referência no mercado através de práticas inovadoras e adequações as Normas, superando as expectativas do cliente, através da prestação de serviço eficiente e de qualidade"
            />

            <CardServices
                title="Valores"
                description="Transparência, Segurança de Pessoas, Comprometimento, Divisão de riquezas, Satisfação do cliente"
            />

        </div>
    )
}