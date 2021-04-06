import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import {StaticImage} from 'gatsby-plugin-image'
import Link from '../components/link'
import {IoMdDownload} from '@react-icons/all-files/io/IoMdDownload'

const NotiArbol = (  ) => (
  <Layout>
 <SEO title="NotiArbol" />
    <div className="max-w-screen-md mx-auto grid grid-cols-1 gap-5 sm:pt-28 pt-20 px-5 pb-24">
      <div className="w-48 mx-auto">
        <StaticImage src="../images/logo.png" alt="logo"/>
      </div> 
      <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-center leading-tight">Periódico Digital</h1>
      

        <div>
          <h2 className="uppercase tracking-wider font-semibold text-xs pb-3 border-b border-gray-300">↓ PUBLICACIONES</h2>


          <article className="border-b border-gray-200 py-8">
          

              <h2 className="text-2xl font-bold mt-4 mb-1 leading-tight"> Edición 273 del periódico 4F resalta rol fundamental de la nueva AN para la recuperación de la economía en Venezuela</h2>
            
              <span className="block mb-4 font-medium text-green-500 text-lg">(19/3/2021 01:00 p. m.)</span>
              <p className="text-gray-700 text-sm">El periódico 4F, en su edición Nº 273, primera del año 2021, resalta el rol fundamental de la nueva Asamblea Nacional.</p>
            <Link className="items-center justify-center cursor-pointer mt-4 inline-flex py-2 px-4 rounded-md bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-100 font-semibold leading-8 transform hover:scale-105">
              <IoMdDownload className="mr-1 text-white"/> <p className="text-white ">Descargar</p>

            </Link>

          </article>
      </div>
  </div>
</Layout>

)
export default NotiArbol
