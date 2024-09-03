import { CardServices } from "./card-services";
import Mission from '../../assets/missao.png'
import Vision from '../../assets/visao.png'
import Values from '../../assets/valor.png'

export function Services() {
    return (
        <div className="flex flex-wrap justify-center align-center gap-x-14">
            <CardServices
                title="Missão"
                description="Gerenciar os riscos ocupacionais de forma equilibrada e estratégica, através de soluções informatizadas e indicação de medidas de prevenção de acidentes do trabalho, com o objetivo de proteger a vida e a sociedade, manter ambientes de trabalho saudáveis e garantir a conformidade legal e a sustentabilidade de seus negócios "
                image={Mission}
            />

            <CardServices
                title="Visão"
                description="Proporcionar uma nova percepção para a segurança e saúde no trabalho do Brasil"
                image={Vision}
            />

            <CardServices
                title="Valores"
                description="Reciprocidade. Somos todos ouvidos, mas a partir do entendimento das necessidades de nossos clientes, nossas soluções em segurança e saúde no trabalho somente tem sentido se houver o seu comprometimento proativo com o cumprimento dos planos de ação propostos por nós"
                image={Values}
            />

        </div>
    )
}