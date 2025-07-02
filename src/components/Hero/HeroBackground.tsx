import React from 'react'

function HeroBackground() {
  return (
    <>
        {/* <img
            src="/background1.jpg"
            alt="Fondo hero"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        /> */}
        <div
            className="absolute right-0 w-full pointer-events-none -z-10"
            style={{
            backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 48%)',
            top: '41vh',
            inset: 'auto 0% -21.5vw auto',
            zIndex: 9,
            }}
        />
    </>
  )
}

export default HeroBackground
