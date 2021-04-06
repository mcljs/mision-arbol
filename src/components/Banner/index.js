import React from 'react'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'
import Link from '../link'

const Banner = (  ) => (
  
<div className="pt-6 pb-12 bg-gray-100">  
  <div id="card" className="">
    <h2 className="text-center   text-4xl xl:text-5xl">Ultima Publicacion - Periodico Digital</h2>

    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
         <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
           
        <div className="h-64 w-auto md:w-1/2">
          <StaticImage class="inset-0 h-full w-full object-cover object-center" src="../../images/patria_portada.png" />
        </div>
               <div className="w-full py-10 px-6 text-gray-800 flex flex-col justify-between">

          <h3 class="font-semibold text-lg leading-tight "> Edición 273 del periódico 4F resalta rol fundamental de la nueva AN para la recuperación de la economía en Venezuela </h3>
          <p className="mt-2">
           
El periódico 4F, en su edición Nº 273, primera del año 2021, resalta el rol fundamental de la nueva Asamblea Nacional

          </p>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            Caracas &bull; 19 de Marzo de 2021
          </p>
                
<div class="inline-block mr-2 mt-2">
  <Link to="/noti-arbol">
                    <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg flex items-center">
                       <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        Descargar
                    </button>
  </Link>
                </div>
        </div>
           
      </div> 
 <Link to="/noti-arbol" className="items-center justify-center cursor-pointer mt-4 inline-flex py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-100 font-semibold leading-8 transform hover:scale-105">
              <p className="text-white ">Ver Mas →</p>

            </Link>
    </div>

  </div>
</div>

      )
export default Banner
