import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import Book from '../components/Book'
import { Tabs, Tab, TabContent } from '../components/Tabs'
import Link from '../components/link'

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
                <Link to="#" class="text-gray-200 font-bold py-2 px-6">
                    Buscar
                </Link>
            </div>
        </div>

       </div>

          <Tabs>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 0} id={0}>Forestale</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 1} id={1}>Medicinal</Tab>

              <Tab onClick={handleTabSwitch} activeTab={activeTab === 2} id={2}>Ornimentales</Tab>

              

            </Tabs>
        
   {/* ------------ Books Section ------------ */}
 <TabContent activeTab={activeTab === 0}>

      <Book 
        slug="#"
        title="Saman"
        date="2021-03-19"
        description="El Saman"/>
  

          
        </TabContent> 

    </Layout>
  )
}

export default Guide

