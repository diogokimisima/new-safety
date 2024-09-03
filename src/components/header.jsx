import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Menu, X } from 'lucide-react' // X para ícone de fechar

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center w-full px-12 py-5 bg-white fixed top-0 z-50">
      <div className="flex-1">
        <img className="h-12" src={Logo} alt="logo" />
      </div>
      <nav className="flex">
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-8 h-8"/> : <Menu className="w-8 h-8"/>}
          </button>
        </div>

        <div className={`hidden md:flex gap-10`}>
          <a className='link-topo uppercase' href="#inicio">Início</a>
          <a className='link-topo uppercase' href="#about">Sobre</a>
          <a className='link-topo uppercase' href="#services">Serviços</a>
          <a className='link-topo uppercase' href="#clients">Clientes</a>
          <a className='link-topo uppercase' href="#contatos">Contatos</a>
        </div>


        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 right-0 w-full bg-white p-5 shadow-lg flex flex-col items-center gap-5">
            <a className='link-topo' href="#inicio" onClick={toggleMenu}>Início</a>
            <a className='link-topo' href="#about" onClick={toggleMenu}>Sobre</a>
            <a className='link-topo' href="#services" onClick={toggleMenu}>Serviços</a>
            <a className='link-topo' href="#clients" onClick={toggleMenu}>Clientes</a>
            <a className='link-topo' href="#contatos" onClick={toggleMenu}>Contatos</a>
          </div>
        )}
      </nav>
    </header>
  );
}
