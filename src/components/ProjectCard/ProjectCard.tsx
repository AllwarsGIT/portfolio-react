
import styles from './ProjecCard.module.css'
import React from 'react'
import AppEmbed from '../AppEmbed/AppEmbed'


interface ProjectCardProps {
    title: string;
    description: string;
    src?:string;
}


function ProjectCard({title="title", description="description", src}: ProjectCardProps) {
  return (
    <div className={`${styles.background} w-5/6 min-h-[24rem] bg-white rounded-lg shadow-lg p-6 flex items-center gap-6 m-5 mx-auto`}>
        <div className="flex-1 flex flex-col justify-start items-start">
            <h3 className="text-2xl font-bold mb-2">
                {title}
            </h3>
            <p className="text-gray-700">
                {description}
            </p>
        </div>

        <AppEmbed src={src}/>
    </div>

  )
}

export default ProjectCard
