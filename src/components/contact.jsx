import LogoWhats from '../assets/logo-whats.png'
import LogoTelefone from '../assets/logo-telefone.png'
import LogoEmail from '../assets/email-logo.png'
import FotoRafa from '../assets/foto-rafa.jpg'

export function Contact() {
    return (
        <div className='space-y-10 bg-[#f5f5f5] py-6 '>
            <h2 className="text-blue-950 mb-10 text-2xl lg:text-3xl text-center font-bold relative">
                Contato
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto"></span>
            </h2>
            <div className='flex flex-col justify-center items-center '>
                <img className='rounded-full w-36' src={FotoRafa} alt="foto-perfil"/>
                <h2 className='text-blue-950 font-bold text-xl mt-8'>Rafael Macedo</h2>
                <span className='text-emerald-800 font-bold'>Diretor Comercial</span>

                <p className='text-center mt-10 px-7 sm:px-36'>Formado em Técnico em Segurança do Trabalho pelo IEA - Instituto Educacional de Araçatuba, Engenheiro Ambiental pela UNIFAI ( Centro Universitário de Adamantina), Pós Graduado em Engenharia de Segurança pela Universidade Paulista, Perito Judicial de Insalubridade e Periculosidade pela Universidade Vendrame, atua na área de SSMA desde o ano de 2010. Possui ampla experiência no cenário industrial e florestal.</p>
            </div>
            <div className='flex justify-center gap-6 flex-wrap'>
                <div className='flex items-center'>
                    <img className='h-12 sm:h-16' src={LogoWhats} alt="logo whats" />
                    <img className='h-8 sm:h-12' src={LogoTelefone} alt="logo telefone" />
                    <p className='font-bold text-lg sm:text-xl'>(18) 99635-8838</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-8 sm:h-12' src={LogoEmail} alt="logo email" />
                    <p className='font-bold text-lg sm:text-xl'>comercial.newsafety@outlook.com</p>
                </div>
            </div>

        </div>
    )
}