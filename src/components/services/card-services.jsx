import { CheckParagraph } from './check-paragraph';

export function CardServices() {
    return (
        <div className='space-y-10'>
            <div className='flex justify-center items-center flex-col px-4 bg-white rounded-xl p-10 m-5 custom-shadow xl:flex-row gap-y-10'>
                <div className='flex-1 flex flex-col gap-y-4 '>
                    <h2 className='md:text-2xl text-xl text-blue-950 font-bold'>Laudos e Programas</h2>
                    <p className='leading-relaxed text-sm md:text-base'>
                        Nossa equipe especializada oferece uma ampla gama de laudos técnicos e programas de segurança no trabalho. Eles são desenvolvidos para garantir a saúde e segurança dos trabalhadores, conforme as normas regulamentadoras vigentes.
                    </p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>LTCAT</span>  - Laudo Técnico das Condições do Ambiente de Trabalho</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>PGR</span> - Programa de Gerenciamento de Riscos</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>PCMSO</span> - Programa de Controle Médico e Saúde Ocupacional</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>AET</span> - Análise Ergonômica do Trabalho</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>PPR</span> - Programa de Proteção Respiratória</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>PCA</span> - Programa de Conservação Auditiva</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'>Assistência Técnica em Perícias de Insalubridade e Periculosidade</p>
                    </CheckParagraph>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col px-4 bg-white rounded-xl p-10 m-5 custom-shadow xl:flex-row gap-y-10'>
                <div className='flex-1 flex flex-col gap-y-4'>
                    <h2 className='md:text-2xl text-xl text-blue-950 font-bold '>Envio dos Eventos SST na Plataforma eSocial</h2>
                    <p className='leading-relaxed text-sm md:text-base'>
                        Realizamos o envio completo dos eventos de Saúde e Segurança do Trabalho (SST) na plataforma eSocial, garantindo que sua empresa cumpra todas as obrigações legais de forma ágil e precisa.
                    </p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>S-2210</span> - Comunicação de Acidente de Trabalho - CAT</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>S-2220</span> -  Monitoramento da Saúde do Trabalhador</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>S-2240</span> - Condições Ambientais do Trabalho</p>
                    </CheckParagraph>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col px-4 bg-white rounded-xl p-10 m-5 custom-shadow xl:flex-row gap-y-10'>
                <div className='flex-1 flex flex-col gap-y-4'>
                    <h2 className='md:text-2xl text-xl text-blue-950 font-bold'>Treinamentos Normativos</h2>
                    <p className='leading-relaxed text-sm md:text-base'>
                        Oferecemos treinamentos especializados conforme as Normas Regulamentadoras (NRs) do Ministério do Trabalho, com foco na capacitação e segurança dos trabalhadores. Nossos programas são personalizados para atender às necessidades específicas de cada empresa, abordando temas essenciais como a prevenção de acidentes, o uso adequado de Equipamentos de Proteção Individual (EPIs) e a conscientização sobre os riscos presentes no ambiente de trabalho. Com instrutores experientes e material didático atualizado, garantimos um aprendizado eficaz e alinhado às exigências legais, promovendo um ambiente de trabalho mais seguro e produtivo.
                    </p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 05</span>  - Comissão Interna de Prevenção de Acidentes - CIPA</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 06</span> Equipamento de Proteção Individual - EPI</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 10</span> - Segurança em Instalações e Serviços em Eletricidade</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 11</span> - Transporte, Movimentação, Armazenagem e Manuseio de Materiais</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 12</span> - Máquinas e Equipamentos</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 18</span> - Condições e Meio Ambiente de Trabalho na Indústria da Construção</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 20</span> -  Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 23</span> -  Proteção Contra Incêndios</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 31</span> -  Segurança e Saúde no Trabalho na Agricultura, Pecuária, Silvicultura e Exploração</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 33</span> -  Segurança e Saúde no Trabalho em Espaços Confinados</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'><span className='font-bold'>NR 35</span> - Trabalho em Altura</p>
                    </CheckParagraph>
                    <CheckParagraph> 
                        <p className='text-sm md:text-base'>Treinamentos de Primeiros Socorros, Direção Defensiva, OFF Road, Cargas Indivisíveis e Transporte de Emergência</p>
                    </CheckParagraph>
                </div>
            </div>

        </div>



    )
}






