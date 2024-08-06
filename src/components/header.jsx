import Logo from '../assets/logo.jpg'

export function Header() {
    return (
        <header className="flex w-full px-12 py-5">
            <div className="flex-1">
                <img className="h-12" src={Logo} alt="logo" />
            </div>
            <div className='flex gap-10'>
                <a className='text-emerald-600' href="">Início</a>
                <a href="">Serviços</a>
                <a href="">Clientes</a>
                <a href="">Contatos</a>
                <a href="">História</a>
            </div>
        </header>
    )
}