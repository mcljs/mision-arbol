import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import HeaderLayout from "../components/HeaderLayout"
import PostItem from "../components/PostItem"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SkeletonImage from "../components/SkeletonImage/SkeletonImage"

const Blog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 25
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              imageUrl
              cover {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }

              description
              date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY ")
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  console.log(postList)

  return (
    <Layout>
      <SEO title="Noticias" />
      <HeaderLayout
        heading="Noticias"
        image="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616367497/assets/noticia-min_cvatoc.jpg"
      />
      <section className="sm:py-10   mx-auto px-8 dark:bg-[#03091e]">
        <ul className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5 dark:bg-[#03091e]">
          {postList.map(
            ({
              node: {
                frontmatter: { cover, date, description, title, imageUrl },
                timeToRead,
                fields: { slug },
              },
            }) => (
              <li className="m-4 ">
                <Link
                  className="-full border-2 border-gray-100 flex flex-col items-center justify-between rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transform transition-all ease-in-out duration-200"
                  to={slug}
                >
                  {cover === null ? (
                    <SkeletonImage
                      img={<img className="w-full" src={imageUrl} alt="" />}
                    />
                  ) : (
                    <GatsbyImage
                      className="w-full"
                      image={cover?.childImageSharp.gatsbyImageData}
                    />
                  )}
                  <section className="p-4">
                    <h2 className="sm:text-2xl text-xl pb-5 leading-tight font-semibold dark:text-white">
                      {title}
                    </h2>
                    <p className="prose opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in-out line-clamp-3 dark:text-[#becde3]">
                      {description}
                    </p>
                  </section>
                  <span className="sm:px-8 px-5 sm:pb-8 pb-5 ml-0 sm:ml-4 text-left w-full text-gray-600 opacity-75 text-sm dark:text-[#becde3]">
                    {date}{" "}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  )
}
export default Blog
