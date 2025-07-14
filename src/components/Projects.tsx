import ProjectCard from './ProjectCard'
import React from 'react'

function Projects() {
  return (
   <section id="projects" className="bg-blackPrimary w-full flex justify-center items-center">
    <div className="container mx-auto px-4 text-left ">
        <div className="flex items-baseline justify-center md:justify-start mt-15 items p-5 md:mt-5">
            <span className="text-bluePrimary number-responsive font-mono mr-2 md:text-left">01.</span>
            <h2 className="text-grayPrimary  font-bold  header-responsive">Mis Proyectos</h2>
        </div>

        <div className="flex flex-col gap-8">
            <ProjectCard 
                src ="https://job-searching-app-react.vercel.app/"
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/>
            {/* <ProjectCard 
                src ="https://job-searching-app-react.vercel.app/"
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/>
            <ProjectCard 
                src ="https://job-searching-app-react.vercel.app/"
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/> */}
        </div>
    </div>
</section>

  )
}

export default Projects
