import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center w-full px-12 py-4 bg-white fixed top-0 z-50 shadow-lg">
      <div className="flex-1">
        <img className="h-12" src={Logo} alt="logo" />
      </div>
      <nav className="flex">
        {/* Botão para mobile */}
        <div className="lg:hidden">
          <button type='button' onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Links para desktop */}
        <div className="hidden lg:flex gap-10">
          <a className='link-topo uppercase text-sm lg:text-base' href="#inicio">Início</a>
          <a className='link-topo uppercase text-sm lg:text-base' href="#about">Sobre</a>
          <a className='link-topo uppercase text-sm lg:text-base' href="#proposito">Propósitos</a>
          <a className='link-topo uppercase text-sm lg:text-base' href="#services">Serviços</a>
          <a className='link-topo uppercase text-sm lg:text-base' href="#clients">Clientes</a>
          <a className='link-topo uppercase text-sm lg:text-base' href="#contact">Contatos</a>
        </div>

        {/* Menu para mobile com animação */}
        <div className={`lg:hidden absolute top-16 right-0 w-full bg-white shadow-lg flex flex-col items-center gap-5 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'p-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <a className='link-topo' href="#inicio" onClick={toggleMenu}>Início</a>
          <a className='link-topo' href="#about" onClick={toggleMenu}>Sobre</a>
          <a className='link-topo' href="#proposito" onClick={toggleMenu}>Propósitos</a>
          <a className='link-topo' href="#services" onClick={toggleMenu}>Serviços</a>
          <a className='link-topo' href="#clients" onClick={toggleMenu}>Clientes</a>
          <a className='link-topo' href="#contact" onClick={toggleMenu}>Contatos</a>
        </div>
      </nav>
    </header>
  );
}
