import React from "react"
import '../components/FotoHeader/fotos.css'
import Hero from '../images/noticia.jpg' 
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLayout from "../components/HeaderLayout"
import PostItem from "../components/PostItem"
import { useStaticQuery, graphql } from "gatsby"

const Blog = () =>{

const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC},limit: 20){
        edges {
          node {
           fields {
              slug
              }
            frontmatter {
            title
              cover{
                childImageSharp{
                  fluid(maxWidth: 900){
                    ...GatsbyImageSharpFluid
                  }
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
      image={Hero} />
   
  <ul className="grid md:grid-cols-2 grid-cols-1 sm:gap-8 gap-5">
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
    fluid={cover.childImageSharp.fluid}
    title={title}
    description={description}
    date={date}
    timeToRead={timeToRead}
          />

        ))}
  </ul>
  </Layout>

)
}
export default Blog
