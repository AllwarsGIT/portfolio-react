import React from 'react'

function Header() {
  return (
    <header className="bg-blackPrimary borderBottomGradient sticky top-0 px-10 left-0 w-full flex flex items-center z-10">
      <nav className="text-graySecondary flex flex-wrap py-5  w-full justify-between">
        <a className="font-bold text-2xl">Álvaro.S</a>
        <ol className=" flex flex-wrap space-x-15 text-xl">
            <li className="flex items-baseline">
              <span className="text-bluePrimary text-sm font-mono mr-2">01.</span>
              <p className="text-lg font-semibold">Proyectos</p>
            </li>
            {/* <li className="flex items-baseline">
              <span className={`${styles.navNumbers} text-sm font-mono mr-2`}>02.</span>
              <p className="text-lg font-semibold">Acerca de</p>
            </li>            <li className="flex items-baseline">
              <span className={`${styles.navNumbers} text-sm font-mono mr-2`}>03.</span>
              <p className="text-lg font-semibold">Contacto</p>
            </li> */}
        </ol>
      </nav>  
    </header>
  )
}

export default Header
