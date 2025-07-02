import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className="px-20 py-10 fixed top-0 left-0 w-full bg-transparent flex z-50  flex items-center">
      <nav className={`${styles.nav} flex flex-wrap w-full justify-between`}>
        <a className="font-bold text-2xl">Álvaro.S</a>
        <ol className="font-bold flex flex-wrap space-x-15 text-xl">
            <li className="">Inicio</li>
            <li className="">Sobre mí</li>
            <li className="">Contacto</li>
        </ol>
      </nav>  
    </header>
  )
}

export default Header
