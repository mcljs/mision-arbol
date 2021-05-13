import React from "react"
import propTypes from "prop-types"
import Link from '../link'


const RecommendedPosts = ({ next, previous }) => (
  <section className="mx-auto max-w-5xl px-6 md:px-0 flex-1 w-full md:w-5/6 mb-4 dark:text-white ">
   <hr className="my-4 w-2/3 mx-auto sm:w-full sm:my-6 bg-gray-100" />

  <ul className="flex">
    {previous && (
      <li className="w-1/2">
        <div className="flex flex-col text-left">
          <div>← Anterior Publicación</div>
         <Link
        to={previous.fields.slug}
       
           className="block py-2 font-semibold mr-12 hover:no-underline hover:text-accent-3 hover:text-green-800 dark:hover:text-gray-300"
      >
        {previous.frontmatter.title}
      </Link>
     </div>
  </li>
    )}
    {next && (
      <li className="w-1/2">
        <div className="flex flex-col text-right">
          <div>Siguiente Publicación →</div>
         <Link
        to={next.fields.slug}
   
        className="block py-2 ml-8 font-semibold hover:no-underline hover:text-accent-3 hover:text-green-800 dark:hover:text-gray-300"
      >
        {next.frontmatter.title}
        </Link>
     </div>
  </li>
    )}
  </ul>
</section>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
