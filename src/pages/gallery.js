import React from 'react'
import {Image} from '../components/Gallery/Images';

import Instagram from '../components/Gallery'
import Layout from '../components/layout';
import SEO from '../components/Seo'


const Gallery = (  ) => {

 
    return(
  <Layout>
    <SEO title="Galería de Imagenes" />
    <div className="py-6 px-6 sm:px-8">
      <header>
      <h1 className="flex flex-col items-center">
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-red-600 font-semibold tracking-wide uppercase">Instagram</span>*/}
        <h1 className="mt-2 mb-8 font-extrabold tracking-tight text-gray-99 lg:text-4xl sm:text-3xl text-2xl dark:text-white">Galería de Imágenes</h1>
        <hr className="nt-8 border-t-2 w-20 mx-auto"/>
      </h1>
    </header>

      <Image />

</div>
       </Layout>
  );
}
export default Gallery
