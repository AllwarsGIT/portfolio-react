import React from 'react'

function Header() {
  return (
    <header className="px-20 py-10 fixed top-0 left-0 w-full bg-transparent flex z-50  flex items-center">
        <nav className="flex flex-wrap w-full justify-between">
            <a className="font-bold text-2xl text-white">Álvaro.S</a>
            <div className="font-bold flex flex-wrap space-x-15 text-xl text-white">
                <a className="">Inicio</a>
                <a className="">Sobre mí</a>
                <a className="">Contacto</a>
            </div>

        </nav>
      
    </header>
  )
}

export default Header
