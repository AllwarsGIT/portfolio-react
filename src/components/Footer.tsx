import React from 'react'

function Footer() {
  return (
    <footer className="bg-blackPrimary text-grayPrimary text-center">
      <p className="text-xs md:text-base  py-5">
        © {new Date().getFullYear()} Álvaro Sánchez. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
