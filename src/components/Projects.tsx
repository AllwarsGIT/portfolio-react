import ProjectCard from './ProjectCard'
import React from 'react'

function Projects() {
  return (
   <div className="bg-blackPrimary">
    <div className="container mx-auto px-4 text-left">
        <div className="flex items-baseline">
            <span className="text-bluePrimary text-2xl font-mono mr-2">01.</span>
            <h2 className="text-grayPrimary text-3xl font-bold mt-15">Mis Proyectos</h2>
        </div>

        <div className="flex flex-col gap-8">
            <ProjectCard 
                src ="https://job-searching-app-react.vercel.app/"
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/>
        </div>
    </div>
</div>

  )
}

export default Projects
