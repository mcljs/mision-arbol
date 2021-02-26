import React from "react"
import '../components/FotoHeader/fotos.css'

import Layout from "../components/layout"

import SEO from "../components/seo"


const Blog = () => (
  <Layout>
    <SEO title="Noticias" />
   <h1 className="noticia" style={{fontSize: '4.2rem'}}>Noticias</h1>
  </Layout>
)

export default Blog
