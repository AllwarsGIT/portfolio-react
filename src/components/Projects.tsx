import ProjectCard from './ProjectCard'
import React from 'react'

function Projects() {
  return (
   <section id="projects" className="bg-blackPrimary flex justify-center items-center  ">
    <div className="mx-auto px-4 text-left max-w-[1500px] ">
        <div className="flex items-baseline justify-center  md:justify-start md:mx-30 mt-10 p-5 max-w-[500px]">
            <span className="text-bluePrimary number-responsive font-mono mr-2 md:text-left">01.</span>
            <h2 className="text-grayPrimary  font-bold  header-responsive ">Mis Proyectos</h2>
            <div className=" hidden md:block bg-graySecondary h-[1px] w-40 ml-4 self-center" />
            

        </div>

        <div className="flex flex-col gap-2">
            <ProjectCard 
                githubUrl="https://github.com/AllwarsGIT/job-searching-app-react"
                demoUrl="https://job-searching-app-react.vercel.app/"
                techName={["React", "Node.js", "Typescript"]}
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/>
            {/* <ProjectCard 
                githubUrl="https://github.com/AllwarsGIT/job-searching-app-react"
                demoUrl="https://job-searching-app-react.vercel.app/"
                techName={["React", "test2", "test", "test", "test", "test", "test"]}
                last = "Proyecto reciente" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/> */}
            
        </div>
    </div>
</section>

  )
}

export default Projects
