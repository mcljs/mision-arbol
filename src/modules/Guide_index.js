import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import { Tabs, Tab, TabContent } from '../components/Tabs'
import Link from '../components/link'
import {EspList} from '../components/Especies/EspList'

const Guide = () => {

   const [activeTab, setActiveTab] = useState(0)

  const handleTabSwitch = e => {
    const index = parseInt(e.target.id, 0)
    if (index !== activeTab) {
      setActiveTab(index)
    }
  }






  return (
    <Layout >
 <SEO title="Guia de Especie" />
       <div className="text-center max-w-xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-bold mb-5 mt-12 text-gray-600">Guia de Especie</h1>
        <p className="text-xl mb-5 font-light">Esta guia nos acerca al mundo de las plantas y proporciona informacion util.<br />Si no encuentras la especie que buscas, puedes solicitarnos su inclusión en la guía.</p>       
<div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md bg-yellow-600 shadow">
                <Link to="/guide/search" class="text-gray-200 font-bold py-2 px-6">
                    Buscar
                </Link>
            </div>
        </div>

       </div>

          <Tabs>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 0} id={0}>Forestales</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 1} id={1}>Medicinal</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 2} id={2}>Ornamentales</Tab>

              

            </Tabs>
        
   {/* ------------ Books Section ------------ */}
 <TabContent activeTab={activeTab === 0}>

   <EspList publisher="Forestales"/>
    

  </TabContent> 


 <TabContent activeTab={activeTab === 1}>

     <EspList publisher="Medicinal"/>

  

          
        </TabContent> 

 <TabContent activeTab={activeTab === 2}>

     <EspList publisher="Ornamentales"/>

  

          
        </TabContent> 


    </Layout>
  )
}

export default Guide

