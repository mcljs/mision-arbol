import React from "react"
import Testimonials from "../components/Header/Arbol"
import Hero from "../components/Hero/Hero"
import {SliderData} from "../components/Hero/SliderData"
import InfoSection from "../components/InfoSection/InfoSection"

import Layout from "../components/layout"

import SEO from "../components/seo"
import {InfoData} from "../data/InfoData"


const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    <Testimonials />
  </Layout>
)

export default IndexPage
