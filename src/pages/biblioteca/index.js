import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/Seo"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Biblioteca = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <>
      <Layout>
        <SEO title="Biblioteca" />
        <div className="bg-gray-100 pb-12 dark:bg-[#121f3d]">
          {posts.map(post => {
            const image = getImage(post.frontmatter.image)

            return (
              <>
  <div className="text-center max-w-xl mx-auto">
      <h1 className="text-6xl md:text-7xl font-bold mb-24 pt-12 text-gray-600 dark:text-white">Biblioteca Digital</h1> </div>
                <div className="mt-6 sm:px-28 px-0">
                  <div className="dark:bg-[#24385b] bg-white rounded-lg flex sm:flex-row flex-col sm:space-x-5 space-x-0 sm:space-y-0 space-y-5 items-center sm:text-left text-center mb-4">
                    <a
                      href="#"
                      class="block flex-shrink-0 sm:w-auto m:w-24 w-36"
                    >
                      <GatsbyImage
                        image={image}
                        alt={image}
                        className="object-cover rounded-md"
                      />
                    </a>

                    <div class="mt-2">
                      <Link
                        to={post.slug}
                        key={post.slug}
                        className="text-2xl text-gray-700 font-bold hover:underline dark:text-white"
                      >
                        {post.frontmatter.title}
                      </Link>
<h1 class="text-gray-700 font-bold dark:text-white">{post.frontmatter.autor}</h1>
                      <p class="mt-2 text-gray-600 line-clamp-3 dark:text-[#becde3]">
                       <MDXRenderer>{post.body}</MDXRenderer>

                      </p>
                      <Link
                        to={post.slug}
                        key={post.slug}
                        className="mt-4 mb-8 text-blue-500 hover:underline"
                      >
                        Leer Mas..
                      </Link>
                    </div>

                  </div>
                </div>
              </>
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "biblioteca" } } }
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          autor
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 130, height: 130)
            }
          }
        }
        body
      }
    }
  }
`

export default Biblioteca
