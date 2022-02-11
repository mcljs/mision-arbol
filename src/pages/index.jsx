import React from "react"
import {Image} from "../components/Gallery/Images"
import SEO from '../components/Seo'
import DelayedFallback from "../components/Tweet/DelayedFallback"
import Vertices from "../components/Vertices"
import useDarkMode from "../hooks/useDarkMode"
import Articles from "../components/Articles"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import InfoSection from "../components/InfoSection/InfoSection"
import Email from '../components/Email'
import {InfoData} from "../data/InfoData"
import VideoSection from "../components/VideoSection"
import Tweet from "../components/Tweet/index"
import BannerCenso from "../components/Banner/CensoNacional"


//const InfoSection =  React.lazy(()=> import('../components/InfoSection/InfoSection'))
//const Email = React.lazy(()=> import('../components/Email'))
//const {InfoData} = React.lazy(()=> import('../data/InfoData'))
//const VideoSection = React.lazy(()=> import('../components/VideoSection'))
//const Tweet = React.lazy(()=> import('../components/Tweet/index'))
//const BannerCenso = React.lazy(()=> import('../components/Banner/CensoNacional'))

//import Testimonials from "../components/Header/Arbol"

//import SEO from "../components/seo"


const IndexPage = () => {

useDarkMode()

  return (
    <>
 
 <SEO title="Inicio" />

  <Layout>
  
      <VideoSection />
    <Articles />
    <BannerCenso />
  <Banner />
   <Vertices />
    <InfoSection {...InfoData}/>  
 <Tweet />
    <Email />  
  </Layout>


    </>
)}

export default IndexPage
