import React from 'react'
import Link from './link'
import {StaticImage} from 'gatsby-plugin-image';

const Book = ({slug,title,date,description}) => {
    
    return(
  <>
  <ul className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 my-12 mx-auto px-4 md:px-12">



       
      
<li className="overflow-hidden rounded-lg shadow-lg">

                <Link to={slug}>
                    <StaticImage alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <Link className="no-underline hover:underline text-black" to={slug}>
                        {title}
                        </Link>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {date}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <Link className="flex items-center no-underline hover:underline text-black" to={slug}>
                
                        <p className="ml-2 text-sm">
                            {description}
                        </p>
                    </Link>
                    <Link className="no-underline text-grey-darker hover:text-red-dark" to={slug}>
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </Link>
                </footer>

            </li>
  
  </ul>
  
  </>
  );
}
export default Book



