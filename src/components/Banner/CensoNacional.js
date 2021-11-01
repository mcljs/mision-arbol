import React from 'react'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'
import Link from '../link'
const BannerCenso = (  ) => (
<div className="m-auto max-w-6xl p-12">
   <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 max-w-md flex flex-col justify-center">
         <div className="md:text-5xl text-2xl uppercase font-black dark:text-white">Censo Nacional de Viveros</div>
         <div className="text-xl mt-4 dark:text-white">El Ministerio del Poder Popular Para el Ecosocialismo, a través de la Dirección General de Adaptación y Mitigación del Cambio Climático, Brinda la Bienvenida al Sector Privado y de Libre Emprendimiento a Participar en Nuestro Censo en Línea..</div>
         <div className="my-5 h-16">
            <Link to="/censo-nacional-de-viveros" class="shadow-md font-medium py-2 px-4 text-yellow-100
               cursor-pointer bg-gradient-to-br from-[#95ca3e] to-[#85c638] text-white rounded text-lg text-center w-48 dark:bg-[#98ca3f] dark:text-[#03091e]">Ingresar</Link>
         </div>
      </div>
      <div className="flex md:justify-end w-full md:w-1/2 -mt-5 ">
         <div className="bg-dots ">
            <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4 dark:bg-[#121f3d]">
               <StaticImage alt="card img" className="rounded-t dark:bg-[#121f3d] " src="../../images/censo_vivero.png"/> 
        
            </div>
         </div>
      </div>
   </div>
</div>
      )
export default BannerCenso
