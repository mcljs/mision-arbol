import React from "react"

import Testimonials from "../components/Header/Arbol"
//import Hero from "../components/Hero/Hero"
//import HeroS from '../components/Hero/HeroSlider'
//import {SliderData} from "../components/Hero/SliderData"
//import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection/InfoSection"
import Email from '../components/Email'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {InfoData} from "../data/InfoData"
import VideoSection from "../components/VideoSection"


const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <VideoSection />
  
    <InfoSection {...InfoData}/>
    <Testimonials />
    <Email />
  </Layout>
)

export default IndexPage
