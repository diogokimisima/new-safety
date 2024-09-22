import { CardServices } from "./card-purpose";
import Mission from '../../assets/missao.png'
import Vision from '../../assets/visao.png'
import Values from '../../assets/valor.png'

export function Purpose() {
    return (
        <div className="flex flex-col justify-center align-center">
            <h2 className="text-blue-950 mb-10 text-2xl lg:text-3xl text-center font-bold relative">
                PROPÓSITOS
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto" />
            </h2>

            <div className="flex justify-center flex-wrap gap-y-14 xl:flex-nowrap">
                <CardServices
                    title="Missão"
                    description="Gerenciar os riscos ocupacionais de forma equilibrada e estratégica, através de soluções informatizadas e indicação de medidas de prevenção de acidentes do trabalho, com o objetivo de proteger a vida e a sociedade, manter ambientes de trabalho saudáveis e garantir a conformidade legal e a sustentabilidade de seus negócios "
                    image={Mission}
                />

                <CardServices
                    title="Visão"
                    description="Transformar a cultura de segurança e saúde no trabalho no Brasil, promovendo ambientes de trabalho mais seguros e saudáveis. Buscamos ser líderes em inovação e conscientização, inspirando empresas e colaboradores a adotar práticas proativas que priorizem a prevenção e o bem-estar, assegurando um futuro sustentável para todos."
                    image={Vision}
                />

                <CardServices
                    title="Valores"
                    description="Reciprocidade. Somos todos ouvidos, mas a partir do entendimento das necessidades de nossos clientes, nossas soluções em segurança e saúde no trabalho somente tem sentido se houver o seu comprometimento proativo com o cumprimento dos planos de ação propostos por nós"
                    image={Values}
                />
            </div>
        </div>
    )
}