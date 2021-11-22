import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import HeaderLayout from "../components/HeaderLayout"
import PostItem from "../components/PostItem"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () =>{

const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC},limit: 25){
        edges {
          node {
           fields {
              slug
              }
            frontmatter {
            title
              cover{
                childImageSharp{
                  gatsbyImageData(layout:CONSTRAINED)
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


  return(
  <Layout>
    <SEO title="Noticias" />
    <HeaderLayout 
      heading="Noticias"
      image="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616367497/assets/noticia-min_cvatoc.jpg" />
    <section className="sm:py-10   mx-auto px-8 dark:bg-[#03091e]">
 
   
  <ul className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5 dark:bg-[#03091e]">
{postList.map(
        ({
          node: {
            frontmatter: {cover, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
    <PostItem 
    slug={slug}
    image={cover.childImageSharp.gatsbyImageData}
    title={title}
    description={description}
    date={date}
    timeToRead={timeToRead}
          />

        ))}
  </ul>
  </section>
  </Layout>

)
}
export default Blog
