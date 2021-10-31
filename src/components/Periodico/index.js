import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {IoMdDownload} from '@react-icons/all-files/io/IoMdDownload'
import {periodicoData} from '../../data/periodico'
import DownloadLink from '../DowloadLink'
const Periodico = (  ) => {
    
    return(
  <>
     <div className="max-w-screen-md mx-auto grid grid-cols-1 gap-5 sm:pt-28 pt-20 px-5 pb-24">
      <div className="w-48 mx-auto">
        <StaticImage placeholder="blurred" src="../../images/Nuevo logo Mision arbol.ai1-01 (1).png" alt="logo"/>
      </div> 
      <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-center leading-tight dark:text-white">Periódico Digital</h1>
      

        <div>
          <h2 className="uppercase tracking-wider font-semibold text-xs pb-3 border-b border-gray-300 dark:text-white">↓ PUBLICACIONES</h2>

          {periodicoData.map((item,index)=>{
            return(
 <article className="border-b border-gray-200 py-8" key={index}>
          

              <h2 className="text-2xl font-bold mt-4 mb-1 leading-tight dark:text-white">{item.title}</h2>
            
              <span className="block mb-4 font-medium text-green-500 text-lg">({item.fecha})</span>
              <p className="text-gray-700 text-sm dark:text-[#becde3]">{item.title2}</p>
            <DownloadLink src={item.ruta} target={"_blank"}  className="items-center justify-center cursor-pointer mt-4 inline-flex py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-100 font-semibold leading-8 transform hover:scale-105">
              <IoMdDownload className="mr-1 text-white"/> <p className="text-white ">Descargar</p>

            </DownloadLink>

          </article>

            )
          })}
               </div>
  </div>

  </>
  );
}
export default Periodico
