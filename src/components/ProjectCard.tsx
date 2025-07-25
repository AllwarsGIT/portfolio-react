
import React from 'react'
// import { FaReact } from "react-icons/fa";
// import { FaNode } from "react-icons/fa";
// import { TbBrandTypescript } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import TechBadge from './TechBadge';
// import Image from 'next/image';


interface ProjectCardProps {
    title: string;
    description: string;
    last?:string;
    src?:string;
}


function ProjectCard({title="title", description="description",  last=""}: ProjectCardProps) {
  return (
    <div className= "md:w-4/7 min-h-[24rem] bg-transparent rounded-lg shadow-lg p-6 flex flex-wrap justify-center items-center m-5 mx-auto">
        <div className="flex-1 flex flex-col h-full">
            <p className="text-bluePrimary text-sm font-mono">
                {last}
            </p>
            <h3 className="text-grayPrimary title text-2xl font-bold mb-5 self-start">
                {title}
            </h3>
            <div className="text-graySecondary flex-1 flex items-center">
                <div className="shadow-md bg-card p-5 rounded-lg rounded-bl-lg w-full ">
                    <p className="description">{description}</p>
                    <div className="flex justify-center mt-4 md:hidden gap-4">
                        <TechBadge techName="React" />
                        <TechBadge techName="Node.js" />
                        <TechBadge techName="Typescript" />
                    </div>
                    <div className="flex justify-center md:hidden mt-4 gap-6 ">
                        <a className=" hover:text-bluePrimary transition-colors duration-300 ease-in-out"  href="https://github.com/AllwarsGIT/job-searching-app-react" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FiGithub size={30} />
                        </a>
                        <a className=" hover:text-bluePrimary transition-colors duration-300 ease-in-out"   href="https://job-searching-app-react.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Página web">
                            <TbExternalLink size={30} />
                        </a>
                    </div>  
                </div>
            </div>
            <div className="flex flex-col gap-4 justify-between text-[30px] pt-4 text-graySecondary ">

                {/* <div className="md:hidden mt-1">
                    <AppEmbed src={src} className="self-center" />
                </div> */}
                
                <div className="hidden md:flex md:ml-1 gap-4">
                    <TechBadge techName="React" />
                    <TechBadge techName="Node.js" />
                    <TechBadge techName="Typescript" />
                </div>

                <div className="hidden md:flex md:ml-1 gap-4 ">
                    <a className=" hover:text-bluePrimary transition-colors duration-300 ease-in-out"  href="https://github.com/AllwarsGIT/job-searching-app-react" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a className=" hover:text-bluePrimary transition-colors duration-300 ease-in-out"   href="https://job-searching-app-react.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Página web">
                        <TbExternalLink />
                    </a>
                </div>               
            </div>
        </div>
        {/* <div className="hidden md:block w-full md:w-[50%]">
            <AppEmbed src={src} className="self-center" />
        </div> */}
        {/* <Image
            src="https://placehold.co/600x400/png"
            alt="Project Image"
            className="w-full h-full object-cover rounded-lg"
            width={600}
            height={400}
        /> */}
    </div>

  )
}

export default ProjectCard
