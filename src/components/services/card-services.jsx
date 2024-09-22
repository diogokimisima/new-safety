import { CheckParagraph } from './check-paragraph';

export function CardServices() {
    return (
        <div className='space-y-10'>
            <div className='flex justify-center flex-wrap px-4'>
                <div className='flex-1 px-10 flex flex-col gap-y-4'>
                    <h2 className='text-2xl'>Laudos e Programas</h2>
                    <p>
                        Nossa equipe especializada oferece uma ampla gama de laudos técnicos e programas de segurança no trabalho. Eles são desenvolvidos para garantir a saúde e segurança dos trabalhadores, conforme as normas regulamentadoras vigentes.
                    </p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <CheckParagraph paragraph="LTCAT - Laudo Técnico das Condições do Ambiente de Trabalho"/>
                    <CheckParagraph paragraph="PGR - Programa de Gerenciamento de Riscos"/>
                    <CheckParagraph paragraph="PCMSO - Programa de Controle Médico e Saúde Ocupacional"/>
                    <CheckParagraph paragraph="AET - Análise Ergonômica do Trabalho"/>
                    <CheckParagraph paragraph="PPR - Programa de Proteção Respiratória"/>
                    <CheckParagraph paragraph="PCA - Programa de Conservação Auditiva"/>
                    <CheckParagraph paragraph="Assistência Técnica em Perícias de Insalubridade e Periculosidade"/>
                </div>
            </div>


        </div>



    )
}






