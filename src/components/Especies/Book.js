import React from 'react'
import Link from '../link'
import Image from './Image';

const Book = ({id,title,title_cientifico,caracteristicas_fisicas,image}) => {
    
    return(
       
 

        
<div className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-[#24385b]">

                <Link to={`/guide/${id}`}>
                    <Image filename={image}  className="object-cover object-center w-full lg:h-48 md:h-3" alt={title}/>
                </Link>

             <div className="p-6 ">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font dark:text-white">
                    {title_cientifico}
                </h2>
                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font dark:text-white">
                    {title}
                </h1>
                <p className="mb-3 leading-relaxed line-clamp-3 dark:text-[#becde3]">
                    {caracteristicas_fisicas}
                </p>
                <div className="flex flex-wrap items-center ">
                  <Link className="inline-flex items-center text-green-800 md:mb-2 lg:mb-0 dark:text-yellow-1100" to={`/guide/${id}`}>
                    Leer Mas
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
               
                
                </div>
              </div>

            </div>
  

  
 
  );
}
export default Book



