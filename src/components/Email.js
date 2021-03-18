import React from 'react'
import {AiOutlineMail} from '@react-icons/all-files/ai/AiOutlineMail'
import {StaticImage} from 'gatsby-plugin-image';
const Email = (  ) => {
    
    return(
 
    <section id="call-to-action" className=" relative overflow-hidden bg-blue-800 call-to-action">
      <div className="flex absolute top-0 left-0 w-1/2 h-full call-action-image   lg:visible invisible">
   <StaticImage  placeholder="blurred" src="../images/noticia.jpg" alt="email" />
      </div>
   
      <div className="container mx-auto ">
        <div className="flex justify-end row">
          <div className="w-full lg:w-1/2">
            <div className="py-32 mx-auto text-center call-action-content">
              <h2 className="mb-5 text-5xl font-semibold leading-tight text-white">Boletin informativo</h2>
              <p className="mb-6 text-white">Mantente al dia con nuestras noticias y publicaciones nuevas!</p>
              <form className="relative w-5/6 mx-auto md:w-2/3 call-newsletter">
                <i className="absolute top-0 left-0 pt-3 pl-5 text-xl text-blue-800 lni-envelope">
                  <AiOutlineMail />
                </i>
                <input type="email" placeholder="arbol@gmail.com" className="w-full py-3 pl-12 pr-40 bg-white rounded-full focus:outline-none"/>
                <button className="absolute top-0 right-0 px-6 py-2 mt-1 mr-1 font-bold text-white duration-300 bg-blue-800 rounded-full hover:bg-blue-500">SUSCRIBIRSE</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}
export default Email
