/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React, {useEffect, useState} from 'react';

import {fonts} from '../lib/typography'
import {Global,css} from '@emotion/react'
import {bpMaxSM} from '../lib/breakpoints'
import reset from '../lib/reset'
import RouteLoadingIndicator from './RouterLoadingIndicator';
//import "./layout.css"
const Navbar = React.lazy(()=> import('../components/Navbar'))
const Footer = React.lazy(()=> import('./Footer/Footer'))

export const globalStyles = css`
   ${bpMaxSM} {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 24px;
    }
  }
  hr {
    margin: 50px 0;
    border: none;
 
    background: none;
  }
  em {
    font-family: ${fonts.regularItalic};
  }
  strong,
  b {
    font-family: ${fonts.semibold};
    em {
      font-family: ${fonts.semiboldItalic};
    }
  }
  input,
  textarea {
    border-radius: 4px;
   
    padding: 5px 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    font-family: ${fonts.regular};
    ::placeholder {
      opacity: 0.4;
    }
  }
  .gatsby-resp-image-image {
    background: none !important;
    box-shadow: 0;
  }

  code {
    padding: 2px 4px;
    background: #f4f3fa;

    border-radius: 3px;
  }
 
  pre {
    background-color: #061526;
    border-radius: 4px;
    font-size: 16px;
    padding: 10px;
    overflow-x: auto;
    /* Track */
    ::-webkit-scrollbar {
      width: 100%;
      height: 5px;
      border-radius: 0 0 5px 5px;
    }
    ::-webkit-scrollbar-track {
      background: #061526;
      border-radius: 0 0 4px 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 5px;
    }
  }
  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid #c9a7ff;
  }
  /* the permalink icon */
  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    position: absolute;
    left: -24px;
    height: 100%; /* vertically center */
    width: 20px;
    transition: all 0.2s;
    opacity: 0;
  }
  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg {
    opacity: 1;
  }
  ${reset};

    `
const Layout = ({ children }) => {



const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }


  }, [])

const isSSR = typeof window === "undefined"

  return (
    <>
     
      {!isSSR &&(
 <React.Suspense fallback={ <RouteLoadingIndicator isRouteChanging={state.isRouteChanging}/>}>
     <Global styles={globalStyles}/>
     <Navbar  />
  
   

        <main>{children}</main>
        <Footer />

      </React.Suspense>
      )}

   
    </>
  )
}



export default Layout
