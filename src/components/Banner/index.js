import React from 'react'
import './style.css'
import {StaticImage} from 'gatsby-plugin-image'
import Link from '../link'
const Banner = (  ) => (
  
<div className="pt-6 pb-12 bg-gray-100">  
  <div id="card" className="">
    <h2 className="text-center   text-4xl xl:text-5xl">Ultima Publicación - NOTIÁRBOL</h2>

    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
         <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
           
        <div className="h-64 w-auto md:w-1/2">
          <StaticImage placeholder="tracedSVG" className="inset-0 h-full w-full object-cover object-center" src="../../images/notiarbol.jpg" />
        </div>
               <div className="w-full py-10 px-6 text-gray-800 flex flex-col justify-between">

          <h3 className="font-semibold text-lg leading-tight "> Edición 004 del periódico NOTIÁRBOL resalta la producción de ocumo, plátanos y lechosa por la unidad "Mi Querencia" en Birongo.</h3>
          <p className="mt-2">
           
El periódico NotiÁrbol, en su edición Nº 004, cuarta del año 2021, resalta la producción de ocumo, plátanos y lechosa por la unidad "Mi Querencia" en Birongo. Ademas de donativos por Misión Árbol del Estado Bolívar de plantas ornamentales para el peaje de Guayana.

          </p>
          <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
            Caracas &bull; 03 de Mayo de 2021
          </p>
                
<div className="inline-block mr-2 mt-2">
 
    <Link to="https://drive.google.com/file/d/1yqoKibg5yJ5k_2xPUJwP4ROcHwObaahe/view?usp=sharing" >
      <button type="button" className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-600 hover:bg-blue-500 hover:shadow-lg flex items-center">
                       <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        Descargar
                    </button>
</Link> 

                </div>
        </div>
           
      </div> 
 <Link to="/noti-arbol" className="items-center justify-center cursor-pointer mt-4 inline-flex py-2 px-4 rounded-md bg-gradient-to-br from-[#95ca3e] to-[#85c638]  transition-all ease-in-out duration-100 font-semibold leading-8 transform hover:scale-105">
              <p className="text-white ">Ver Mas →</p>

            </Link>
    </div>

  </div>
</div>

      )
export default Banner
