/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React from 'react';
import Navbar from '../components/Navbar'
//import Footer from './Footer/Footer';

import Footer1 from './Footer';
import ScrollToTop from './ScrollButton';
import useDarkMode from '../hooks/useDarkMode';
import {Header} from './Headers/Header';
import "./layout.css"
const Layout = ({ children }) => {

useDarkMode()





  return (
    <>
      {/*<Global styles={globalStyles}/>*/}    
      <Header />


        <main className="dark:bg-[#121f3d]">{children}</main>
      <ScrollToTop />
      <Footer1 />

   
    </>
  )
}



export default Layout
