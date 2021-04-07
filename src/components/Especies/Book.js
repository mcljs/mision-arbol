import React from 'react'
import Link from '../link'
import Image from './Image';

const Book = ({id,title,title_cientifico,caracteristicas_fisicas,image}) => {
    


    return(
       
 

        
<li className="overflow-hidden rounded-lg shadow-lg">

                <Link to={`/guide/${id}`}>
                    <Image filename={image}  className="block h-auto w-full" alt={title}/>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" to={`/guide/${id}`}>
                        {title}
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {title_cientifico}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black " to={`/guide/${id}`}>
                
                        <p className="ml-2 text-sm line-clamp-3">
                            {caracteristicas_fisicas}
                        </p>
                    </Link>
                  
                </footer>

            </li>
  

  
 
  );
}
export default Book



