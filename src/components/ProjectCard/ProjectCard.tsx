
import styles from './ProjecCard.module.css'
import React from 'react'
import AppEmbed from '../AppEmbed/AppEmbed'
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";



interface ProjectCardProps {
    title: string;
    description: string;
    last?:string;
    src?:string;
}


function ProjectCard({title="title", description="description", src, last=""}: ProjectCardProps) {
  return (
    <div className= "w-5/6 min-h-[24rem] bg-transparent rounded-lg shadow-lg p-6 flex flex-wrap items-center  m-5 mx-auto">
        <div className="flex-1 flex flex-col h-full">
            <p className="highlightTitle text-sm font-mono">
                {last}
            </p>
            <h3 className="title text-2xl font-bold mb-5 self-start">
                {title}
            </h3>
            <div className="flex-1 flex items-center">
                <div className={`${styles.cardBackground} p-5 rounded-tl-lg rounded-bl-lg w-full`}>
                    <p className="description">{description}</p>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-between text-[30px] p-4">
                <div className="flex gap-4">
                    <a className={styles.linkButton}  href="https://github.com/AllwarsGIT/job-searching-app-react" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a className={styles.linkButton}  href="https://job-searching-app-react.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Página web">
                        <TbExternalLink />
                    </a>
                </div>

                <div className="description flex gap-4">
                    <FaReact />
                    <FaNode />
                    <TbBrandTypescript />
                </div>
           

            </div>
        </div>


        <AppEmbed src={src}/>
    </div>

  )
}

export default ProjectCard
