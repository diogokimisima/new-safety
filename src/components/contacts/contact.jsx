import LogoWhats from '../../assets/logo-whats.png'
import LogoTelefone from '../../assets/logo-telefone.png'
import LogoEmail from '../../assets/email-logo.png'
import FotoRafa from '../../assets/foto-rafa.jpg'
import FotoRenata from '../../assets/foto-perfil2.jpg'
import { ContactCard } from './contact-card'

export function Contact() {
    return (
        <div className='space-y-10 bg-[#f5f5f5] py-6 '>
            <h2 className="text-blue-950 mb-10 text-2xl lg:text-3xl text-center font-bold relative">
                Contato
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto" />
            </h2>
            <div className='flex justify-center flex-wrap gap-y-10 gap-x-20'>
            <ContactCard 
                image={FotoRafa}
                name="Rafael Macedo"
                positionJob="Diretor Comercial"
                description="Formado em Técnico em Segurança do Trabalho pelo IEA - Instituto Educacional de Araçatuba, Engenheiro Ambiental pela UNIFAI ( Centro Universitário de Adamantina), Pós Graduado em Engenharia de Segurança pela Universidade Paulista, Perito Judicial de Insalubridade e Periculosidade pela Universidade Vendrame, atua na área de SSMA desde o ano de 2010. Possui ampla experiência no cenário industrial e florestal."
            />

            <ContactCard 
                image={FotoRenata}
                name="Renata Macedo"
                positionJob="Gerente Administrativa"
                description="Formada em Técnica em Segurança do Trabalho pelo IEA - Instituto Educacional de Araçatuba, atua na área de SSMA desde o ano de 2015. Possui ampla experiência no cenário industrial."
            />
            </div>
            <div className='flex justify-center gap-6 flex-wrap'>
                <div className='flex items-center'>
                    <img className='h-10 sm:h-14' src={LogoWhats} alt="logo whats" />
                    <img className='h-8 sm:h-10' src={LogoTelefone} alt="logo telefone" />
                    <p className='font-bold text-sm sm:text-base'>(18) 99635-8838</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-8 sm:h-10' src={LogoEmail} alt="logo email" />
                    <p className='font-bold text-sm sm:text-base'>comercial.newsafety@outlook.com</p>
                </div>
            </div>

        </div>

    )
}