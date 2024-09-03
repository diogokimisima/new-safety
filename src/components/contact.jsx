import LogoWhats from '../assets/logo-whats.png'
import LogoTelefone from '../assets/logo-telefone.png'
import LogoEmail from '../assets/email-logo.png'

export function Contact() {
    return (
        <div>
            <h2 className="text-emerald-950 mb-10 text-2xl lg:text-3xl text-center font-bold relative">
                Contato
                <span className="block mt-2 border-t-4 border-emerald-700 w-1/4 mx-auto"></span>
            </h2>
            <div className='flex justify-center gap-6 flex-wrap'>
                <div className='flex items-center'>
                    <img className='h-16' src={LogoWhats} alt="logo whats" />
                    <img className='h-12' src={LogoTelefone} alt="logo telefone" />
                    <p className='font-bold text-2xl'>(18) 99635-8838 (Rafael Macedo)</p>
                </div>
                <div className='flex items-center'>
                    <img className='h-12' src={LogoEmail} alt="logo email" />
                    <p className='font-bold text-2xl'>comercial.newsafety@outlook.com</p>
                </div>


            </div>
        </div>
    )
}