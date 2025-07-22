
import React from 'react'
import { MdMailOutline } from "react-icons/md";

function ContactMe() {
  return (
    <section id="contact" className="bg-blackPrimary flex justify-center items-center pb-15">
      <div className="mx-auto px-4 text-left max-w-[1500px] ">
          <div className="flex items-baseline justify-center md:justify-start md:mx-30 mt-15 p-5 max-w-[500px]">
              <span className="text-bluePrimary number-responsive font-mono mr-2 md:text-left">03.</span>
              <h2 className="text-grayPrimary  font-bold  header-responsive">Contacto</h2>
              <div className=" hidden md:block bg-graySecondary h-[1px] w-40 ml-4 self-center" />
          </div>

          <div className="flex  md:mx-20 flex-col md:flex-row items-center justify-center text-center  p-5">
           
            <MdMailOutline size={70} />
          </div>
          
          
      </div>
    </section>
  )
}

export default ContactMe
