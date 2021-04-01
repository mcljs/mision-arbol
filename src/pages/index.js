import React from "react"
import LoaderSVG from '../images/loader.svg'
const Layout = React.lazy(()=> import('../components/layout'))
const Testimonials = React.lazy(()=> import('../components/Header/Arbol'))
const InfoSection =  React.lazy(()=> import('../components/InfoSection/InfoSection'))
const Email = React.lazy(()=> import('../components/Email'))
const SEO = React.lazy(()=> import('../components/seo'))
const {InfoData} = React.lazy(()=> import('../data/InfoData'))
const VideoSection = React.lazy(()=> import('../components/VideoSection'))



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
{!isSSR &&(

      <React.Suspense fallback={   <div
              key={`loader`}
              id="___loader"
              style={{
                alignItems: "center",
                backgroundColor: "#f9fafc",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 100,
              }}
           >
              <img src={LoaderSVG} alt="loader spinner" width="150" height="150"/>
        </div>}>
  <Layout>
    <SEO title="Inicio" />
    <VideoSection />
  
    <InfoSection {...InfoData}/>
    <Testimonials />
    <Email />
  </Layout>
 </React.Suspense>
      )}
    </>
)}

export default IndexPage
