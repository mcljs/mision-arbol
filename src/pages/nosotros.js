import React from "react"
import '../components/FotoHeader/fotos.css'
import Layout from "../components/layout"
import HeaderLayout from "../components/HeaderLayout"
import Hero from '../images/img-2.jpg'
import SEO from "../components/seo"


const Nosotros = () => (
  <Layout>
    <SEO title="Nosotros" />
  <HeaderLayout 
      heading="Nosotros"
      image={Hero} />
  </Layout>
)

export default Nosotros
