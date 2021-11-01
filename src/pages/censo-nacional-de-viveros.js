import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/Seo'
import '../components/layout.css'

const Censo = (  ) => {

 
    return(
  <Layout>
    <SEO title="Censo Nacional de Viveros" />
    <div className="py-6 px-6 sm:px-8">
      <header>
      <h1 className="flex flex-col items-center">
        <h1 className="mt-2 mb-8 font-extrabold tracking-tight text-gray-99 lg:text-4xl sm:text-3xl text-2xl">Censo Nacional de Viveros</h1>
        <hr className="nt-8 border-t-2 w-20 mx-auto"/>
      </h1>
        <div className="mt-[1600px]">
          <iframe className="responsive-iframe" src="https://docs.google.com/forms/d/e/1FAIpQLSd8OxM7yz4UiGvEmmVk1Q6Jrs6vHaLiHTKLbZqhgxJUGd3ecg/viewform?embedded=true"></iframe>
</div>

    </header>





</div>
       </Layout>
  );
}
export default Censo
