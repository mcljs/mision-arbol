import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from "../components/Seo"
import Link from '../components/link'
import {EspList} from '../components/Especies/EspList'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Guide = () => {



let [categories] = useState({
    Forestales: [
      {
        id: 1,
        component:  <EspList publisher="Forestales"/>
,

      },

    ],
    Medicinales: [
      {
        id: 1,
        component:  <EspList publisher="Medicinal"/>
,

      },
        ],
    Ornamentales: [
      {
        id: 1,
        component: <EspList publisher="Ornamentales"/>
,

      },
      
         ],
  })




  return (
    <Layout >
 <SEO title="Guía de Especie" />
      <div className="bg-gray-100 dark:bg-[#121f3d]">
       <div className="text-center max-w-xl mx-auto pt-4">
      <h1 className="text-6xl md:text-7xl font-bold mb-5 mt-12 text-gray-600 dark:text-white">Guía de Especies</h1>
      
<div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md bg-yellow-600 shadow">
                <Link to="/guide/search" className="text-gray-200 font-bold py-2 px-6">
                    Buscar
                </Link>
            </div>
        </div>

       </div>
 <div className="px-20 py-16 sm:px-40">
          <Tab.Group >
        <Tab.List className="flex p-1 space-x-2 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-yellow-700 rounded-lg bg-white dark:bg-[#24385b] dark:text-white',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-yellow-400 ring-white ring-opacity-40',
                  selected
                    ? 'bg-yellow-50 dark:bg-[#40587c] shadow'
                    : 'text-yellow-400 hover:bg-white '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List> 
 <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
           
            >
            
                {posts.map((post) => (
                  <>{post.component} </> 
                ))}
            
            </Tab.Panel>
          ))}
        </Tab.Panels>
</Tab.Group>

 </div>
   {/* ------------ Books Section ------------ */}

</div>
    </Layout>
  )
}

export default Guide

