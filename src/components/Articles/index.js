import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SkeletonImage from "../SkeletonImage/SkeletonImage"

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
                    imageUrl
                    cover {
                      publicURL
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
                    imageUrl
                    image {
                      childImageSharp {
                        fluid(
                          maxHeight: 390
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
            }
          `}
          render={({ featuredPost, allPosts }) => (
            <>
              <div className="grid  grid-cols-1 md:grid-cols-2 py-12 gap-x-24 gap-y-12">
                {featuredPost.nodes[0].frontmatter.imageUrl && (
                  <SkeletonImage
                    img={
                      <img
                        className="h-80 w-full rounded-lg"
                        src={featuredPost.nodes[0].frontmatter.imageUrl}
                        alt=""
                      />
                    }
                  />
                )}

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

              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-12 gap-x-24 gap-y-8">
                {allPosts.nodes.map((post, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      {post.frontmatter.image && (
                        <Img
                          fluid={post.frontmatter.image.childImageSharp.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      )}
                      {post.frontmatter.imageUrl && (
                        <SkeletonImage
                          img={
                            <img
                              className="h-80 w-full object-cover"
                              src={post.frontmatter.imageUrl}
                              alt=""
                            />
                          }
                        />
                      )}
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <a href={post.href} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.frontmatter.title}
                          </p>
                          <p className="mt-6 text-base text-gray-500 line-clamp-3">
                            {post.frontmatter.description}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <button className="pt-6 pb-1 text-lg border-b-2 hover:text-green-700 hover:border-green-700 dark:text-white dark:hover:border-yellow-1100">
                          <Link to={post.fields.slug}>Leer Articulo</Link>
                        </button>
                      </div>
                    </div>
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
