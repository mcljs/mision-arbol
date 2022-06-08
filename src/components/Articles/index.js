import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Articles = () => {
  return (
    <>
      <h3 className=" py-2 bg-gradient-to-br from-[#95ca3e] to-[#85c638] text-white  text-4xl text-center font-bold dark:bg-[#98ca3f] dark:text-[#03091e]">
        ACTUALIDAD
      </h3>
      <section className="px-12 py-4 dark:bg-[#121f3d]">
        <StaticQuery
          query={graphql`
            {
              featuredPost: allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 1
              ) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    cover {
                      childImageSharp {
                        fluid(
                          maxHeight: 300
                          maxWidth: 600
                          quality: 100
                          cropFocus: ATTENTION
                        ) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
              allPosts: allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 3
                skip: 1
              ) {
                nodes {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    description
                    image {
                      childImageSharp {
                        fluid(
                          maxHeight: 250
                          maxWidth: 350
                          quality: 100
                          cropFocus: ATTENTION
                        ) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ featuredPost, allPosts }) => (
            <>
              <div className="grid  grid-cols-1 md:grid-cols-2 py-12 gap-x-24 gap-y-12">
                <Img
                  imgStyle={{ objectFit: "cover" }}
                  fluid={
                    featuredPost.nodes[0].frontmatter.cover.childImageSharp
                      .fluid
                  }
                  className="rounded"
                />

                <div>
                  <h2 className="text-2xl font-semibold dark:text-white">
                    {featuredPost.nodes[0].frontmatter.title}
                  </h2>
                  <p className="text-lg text-gray-600 py-4 dark:text-[#becde3]">
                    {featuredPost.nodes[0].frontmatter.description}
                  </p>
                  <button className=" border-b-2 pt-4 pb-1 text-lg hover:border-b-2 focus:border-b-2 hover:text-green-700 hover:border-green-700 dark:text-white hover:border-yellow-1100">
                    <Link to={featuredPost.nodes[0].fields.slug}>
                      Leer Articulo
                    </Link>
                  </button>
                </div>
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-3 py-12 gap-x-24 gap-y-8">
                {allPosts.nodes.map((post, index) => (
                  <div key={index}>
                    <Img
                      imgStyle={{ objectFit: "cover" }}
                      fluid={post.frontmatter.image.childImageSharp.fluid}
                      className="rounded"
                    />

                    <p className="text-2xl mt-4 font-semibold dark:text-white">
                      {post.frontmatter.title}
                    </p>
                    <p className="pt-2 text-lg text-gray-600  dark:text-[#becde3] line-clamp-3 ">
                      {post.frontmatter.description}
                    </p>
                    <button className="pt-6 pb-1 text-lg border-b-2 hover:text-green-700 hover:border-green-700 dark:text-white dark:hover:border-yellow-1100">
                      <Link to={post.fields.slug}>Leer Articulo</Link>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        />
      </section>
    </>
  )
}
export default Articles
