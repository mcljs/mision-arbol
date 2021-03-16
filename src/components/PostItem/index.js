import React from 'react'
import Img from 'gatsby-image'
import Link from '../link'
const PostItem = ({slug,fluid,date,timeToRead,title,description,}) => (


    <li className="m-4">
      <Link className="-full border-2 border-gray-100 flex flex-col items-center justify-between rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transform transition-all ease-in-out duration-200" to={slug}>
  <Img className="w-full"  fluid={fluid}/>
     <section className="p-4">
        <h2 className="sm:text-2xl text-xl pb-5 leading-tight font-semibold">{title}</h2>
        <p className="prose opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in-out ">{description}</p>
      </section>
        <span className="sm:px-8 px-5 sm:pb-8 pb-5 ml-0 sm:ml-4 text-left w-full text-gray-600 opacity-75 text-sm ">{date} • {timeToRead} min de lectura</span>
      </Link>
    </li>





)

export default PostItem
