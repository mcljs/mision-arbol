import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import Link from '../link'


const Vertices = (  ) => {
    
    return(
      <>
        <section className="pt-32 dark:bg-[#121f3d]">
          <h2 className="sm:text-4xl text-xl sm:font-semibold font-bold mb-3 dark:text-white text-center">CONOCE LOS VÉRTICES DE ACCIÓN DE LA MISIÓN ÁRBOL</h2>
    <div className="w-full">
      <ul className="grid sm:grid-cols-3 md:grid-cols-3 grid-cols-1 sm:gap-5 md:gap-3 lg:gap-6 gap-4 dark:text-white">
        <li>
          <Link to="/vertice/territorializacion" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center">
            
              <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../images/vertice1.png" />
              <h2 className="sm:text-xs md:text-sm text-center lg:text-base ">TERRITORIALIZACIÓN DE LA PRESERVACIÓN A TRAVÉS DEL PODER POPULAR</h2>
            </div>
              
          </Link>
        </li>

          <li>
          <Link to="/vertice/preservacion" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../images/vertice2.png" />
              <h2 className="sm:text-xs md:text-sm text-center lg:text-base">PRESERVACIÓN Y CONSERVACIÓN DE LA VIDA Y EL FUTURO</h2>
            </div>
          </Link>
        </li>

 <li>
          <Link to="/vertice/desarrollo" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
   
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../images/vertice3.png" />
              <h2 className="sm:text-base md:text-sm text-center lg:text-base">DESARROLLO SUSTENTABLE Y HÁBITAT SOSTENIBLE</h2>
            </div>
          </Link>
        </li>

 




      </ul>
    </div>
      </section>

  </>
  );
}
export default Vertices
