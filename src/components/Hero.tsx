import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center  ">
      <div
      className="bg-blackPrimary relative max-w-[1000px] min-h-[40vh] m-5 md:m-0  flex flex-col justify-center items-start  px-10  "
    >
          <div className="">
            <h1 className="text-bluePrimary font-semibold mb-4 text-base ">
            Hola, soy
            </h1>
          </div>
          <div className="">
            <h2 className="text-blueSecondary font-bold mb-2  hero-responsive ">
            Álvaro Sánchez.
            </h2>
          </div>
          <div className="">
            <h3 className="text-graySecondary font-bold mb-4  hero-responsive ">
            Desarrollador Front-end.
            </h3>
          </div>
          <div className="">
            <p className="text-grayTertiary text-sm md:text-base lg:text-lg">
            Desarrollo webs limpias, accesibles y responsive.
            </p>
          </div>
          <div className="block md:hidden">
            <ul className="mt-8 text-graySecondary flex flex-row">
              <li className="mr-5">
                <a href="https://github.com/AllwarsGIT" target="_blank" rel="noopener noreferrer">
                  <FiGithub size={24}/>
                </a>
              </li> 
              <li className="mr-5">
                <a href="https://www.linkedin.com/in/%C3%A1lvaro-s%C3%A1nchez-831705366/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24}/>
                </a>
              </li> 
            </ul>
          </div>
      </div>
    </section>
    
  );
};

export default Hero;
