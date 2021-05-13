import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

import {GatsbyImage,getImage, getSrc} from 'gatsby-plugin-image'
import Link from "../../components/link"
import SEO from "../../components/Seo"

const BibliotecaPostPage = ({ data }) => {
  const post = data.mdx
  const image = getImage(post.frontmatter.image)
  const seoImage = getSrc(post.frontmatter.image)
  return (
    <>
      <Layout>
 <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={seoImage}
        />
        <div className="pb-8">

        <div className="sm:px-24 px-2 pt-4">
          <Link className="breadcrumblink" to="/biblioteca">
            <button className="mt-4 sm:ml-8 ml-0 ">
             
              <span className="hover:text-yellow-1100 dark:text-white">← Regresar a la Biblioteca</span>
            </button>
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div className="  grid gap-4">
              <GatsbyImage className="rounded-lg" image={image} alt={image} />
            </div>
            <div>
              <h1 className="font-bold text-7xl dark:text-white">
                {data.mdx.frontmatter.title}
              </h1>
              <h2 className="mt-4 font-extralight text-3xl text-[#454963] mb-3 dark:text-[#becde3]">
                Editorial: {data.mdx.frontmatter.editorial}
              </h2>
              <h3 className="mt-4 text-2xl dark:text-white">Por {data.mdx.frontmatter.autor}</h3>
              <Link to={data.mdx.frontmatter.descarga}>
            <button className="dark:bg-[#98ca3f] dark:text-[#03091e] mt-4 text-white bg-yellow-1100 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Descargar</span>
</button>
              </Link>
            </div>
          </div>
        </div>

 
        <hr className="mt-2 border-t-2 w-20 mx-auto" />
  <div className="py-10 px-6 sm:px-8 mt-8 mb-16 mx-auto prose prose-indigo md:prose-lg lg:prose-xl dark:text-white">  <MDXRenderer>{post.body}</MDXRenderer></div>
      </div>
      </Layout>
    </>
  )
}
export default BibliotecaPostPage

export const query = graphql`
  query BibliotecaPostById($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        editorial
        autor
        descarga
        image{
          childImageSharp{
            gatsbyImageData(layout: FIXED,  height: 700 )
          }
        }
      }
      body
    }
  }
`
