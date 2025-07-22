import React from 'react'

function Footer() {
  return (
    <div className="bg-card text-graySecondary text-center">
      <p className="text-xs md:text-base py-5">
        © {new Date().getFullYear()} Álvaro Sánchez. Todos los derechos reservados.
      </p>
    </div>
  )
}

export default Footer
