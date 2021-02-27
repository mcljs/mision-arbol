import React from "react"
import Testimonials from "../components/Header/Arbol"
//import Hero from "../components/Hero/Hero"
//import HeroS from '../components/Hero/HeroSlider'
//import {SliderData} from "../components/Hero/SliderData"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection/InfoSection"

import Layout from "../components/layout"

import SEO from "../components/seo"
import {InfoData} from "../data/InfoData"


const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <HeroSection />
    <InfoSection {...InfoData}/>
    <Testimonials />
  </Layout>
)

export default IndexPage
