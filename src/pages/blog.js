import React from "react"
import '../components/FotoHeader/fotos.css'
import Hero from '../images/noticia.jpg' 
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderLayout from "../components/HeaderLayout"


const Blog = () => (
  <Layout>
    <SEO title="Noticias" />
    <HeaderLayout 
      heading="Noticias"
      image={Hero} />
    </Layout>
)

export default Blog
