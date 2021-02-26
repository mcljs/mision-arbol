/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */


import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Footer from './Footer/Footer';

import "./layout.css"

const Layout = ({ children }) => {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });




  return (
    <>
 <Navbar toggle={toggle} />
  
   
        <main>{children}</main>
        <Footer />
   
    </>
  )
}



export default Layout
