/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from 'react';
import Navbar from '../components/Navbar'
import Footer from './Footer/Footer';

import "./layout.css"

const Layout = ({ children }) => {






  return (
    <>
 <Navbar  />
  
   
        <main>{children}</main>
        <Footer />
   
    </>
  )
}



export default Layout
