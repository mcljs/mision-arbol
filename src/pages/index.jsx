import React from "react"
import {Image} from "../components/Gallery/Images"
import SEO from '../components/Seo'
import DelayedFallback from "../components/Tweet/DelayedFallback"
import Vertices from "../components/Vertices"

const Articles = React.lazy(() => import("../components/Articles")) 
const Banner = React.lazy(() => import('../components/Banner'))
const Layout = React.lazy(()=> import('../components/layout'))
const Testimonials = React.lazy(()=> import('../components/Header/Arbol'))
const InfoSection =  React.lazy(()=> import('../components/InfoSection/InfoSection'))
const Email = React.lazy(()=> import('../components/Email'))
const {InfoData} = React.lazy(()=> import('../data/InfoData'))
const VideoSection = React.lazy(()=> import('../components/VideoSection'))
const Tweet = React.lazy(()=> import('../components/Tweet/index'))


//import Testimonials from "../components/Header/Arbol"
//import InfoSection from "../components/InfoSection/InfoSection"
//import Email from '../components/Email'
//import Layout from "../components/layout"
//import SEO from "../components/seo"
//import {InfoData} from "../data/InfoData"
//import VideoSection from "../components/VideoSection"


const IndexPage = () => {


const isSSR = typeof window === "undefined"

  return (
    <>
 
 <SEO title="Inicio" />
    {!isSSR &&(
<React.Suspense fallback={ <DelayedFallback/> }>
  <Layout>
  
      <VideoSection />
    <Articles />
  <Banner />
   <Vertices />
<Image />
    <InfoSection {...InfoData}/>  
 <Tweet />
    <Email />  
  </Layout>
 </React.Suspense>

  )}
    </>
)}

export default IndexPage
