import {StaticImage} from 'gatsby-plugin-image'
import React from 'react'
import Link from '../link'


const Vertices = (  ) => {
    
    return(
      <>
        <section className="mt-32">
          <h2 className="md:text-xl text-lg sm:font-semibold font-bold mb-3 dark:text-white text-center">CONOCE LOS VÉRTICES DE ACCIÓN DE LA MISIÓN ÁRBOL</h2>
    <div className="w-full">
      <ul className="grid sm:grid-cols-3 md:grid-cols-6 grid-cols-1 sm:gap-5 md:gap-3 lg:gap-6 gap-4">
        <li>
          <Link to="/vertice/reforesta-tu-casa" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center">
            
              <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../images/Vértice_Reforesta_tu_Casa[1].png" />
              <h2 className="sm:text-xs md:text-sm text-center lg:text-base">REFORESTA TU CASA</h2>
            </div>
              
          </Link>
        </li>

          <li>
          <Link to="/vertice/la-agroforesteria" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../../static/assets/Vértice_Agroforestería[1].png" />
              <h2 className="sm:text-xs md:text-sm text-center lg:text-base">LA AGROFORESTERÍA</h2>
            </div>
          </Link>
        </li>

 <li>
          <Link to="/vertice/paisajismo" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../../static/assets/Vértice_Pasajimo[1].png" />
              <h2 className="sm:text-base md:text-sm text-center lg:text-base">PAISAJISMO</h2>
            </div>
          </Link>
        </li>

 <li>
          <Link to="/vertice/restauracion-ecologica" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../../static/assets/Vértice_Restauración_Ecológica[1].png" />
              <h2 className="sm:text-base md:text-sm text-center lg:text-base">RESTAURACIÓN ECOLÓGICA</h2>
            </div>
          </Link>
        </li>


 <li>
          <Link to="/vertice/reforestacion-de-areas-protegidas" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1 text-base hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center px-3 py-8 space-y-4">
              <StaticImage src="../../../static/assets/Vértice_Reforestación_de_Áreas_Protegidas[1].png" />
              <h2 className="sm:text-base md:text-sm text-center lg:text-base">REFORESTACIÓN DE ÁREAS PROTEGIDAS</h2>
            </div>
          </Link>
        </li>

 <li>
          <Link to="/vertice/forestales" className="w-full scale-100 hover:bg-yellow-1100  transition-all ease-in-out duration-150 rounded-md py-2 px-3 space-x-1  hover:text-white tracking-tight font-bold leading-tight flex items-center"> 
            <div className="w-full flex flex-col items-center justify-center  px-3 py-8 space-y-4">
              <StaticImage src="../../../static/assets/Vértice_Reforestaciones_Forestales[1].png" />
              <h2 className="sm:text-base md:text-sm text-center lg:text-base" >REFORESTACIONES FORESTALES</h2>
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
