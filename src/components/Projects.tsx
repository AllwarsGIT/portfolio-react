"use client"
import ProjectCard from './ProjectCard'
import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


function Projects() {

    const { elementRef, isIntersecting } = useIntersectionObserver({
        threshold: 0.1
      });

  return (
   <section id="projects" className="bg-blackPrimary flex justify-center items-center  ">
    <div className="mx-auto px-4 text-left max-w-[1500px]">
        <div className={`flex items-baseline justify-center  md:justify-start md:mx-30 mt-10 p-5 max-w-[500px]  ${isIntersecting ? 'opacity-100 translate-0' : 'opacity-0 -translate-x-20'} transition-all ease-in-out duration-900`}
        ref={elementRef}
        >
            <span className="text-bluePrimary number-responsive font-mono mr-2 md:text-left">01.</span>
            <h2 className="text-grayPrimary  font-bold  header-responsive ">Mis Proyectos</h2>
            <div className=" hidden md:block bg-graySecondary h-[1px] w-40 ml-4 self-center" />
            

        </div>

        <div className="flex flex-col ">
            <ProjectCard 
                githubUrl="https://github.com/AllwarsGIT"
                demoUrl="https://penspinning-academy.vercel.app/"
                techName={["Next.js", "React", "Typescript", "TailwindCSS"]}
                last = "Proyecto reciente" 
                title="Aplicacion académica para aprender trucos(Penspinning Academy)" 
                description="Plataforma de aprendizaje con generación a partir de datos con estados dinámicos, persistencia de preferencias del usuario, modo oscuro y un sistema de clasificación de trucos por familia, dificultad y modificadores."/>
            <ProjectCard 
                githubUrl="https://github.com/AllwarsGIT/job-searching-app-react"
                demoUrl="https://job-searching-app-react.vercel.app/"
                techName={["React", "Node.js", "Typescript"]}
                last = "" 
                title="Aplicación de búsqueda de trabajo" 
                description="Aplicación web construida con React que permite visualizar ofertas de empleo mediante tarjetas organizadas. Incluye navegación entre páginas de resultados y detalle individual de cada oferta. Implementación con React Router, diseño responsive y uso de datos estáticos de prueba."/>
            
            
            
        </div>
    </div>
</section>

  )
}

export default Projects
