import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StaticImage} from 'gatsby-plugin-image'
import Link from './link'
import banner from '../images/banner2.png'
const Navbar = (  ) => {


   const [click, setClick] = useState(false) 
    const handleClick = () => setClick(!click)

   const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);



  return (
    <>
      
        <div className="h-[130px] w-full bg-cover bg-[#70b72b]" style={{backgroundImage: `url(${banner})`}}>

        </div>
        <header   className="border-t border-[#ee5c33] bg-[#ee5c33] sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2 border-b border-[#ee5c33]">
    <div className="flex items-center justify-between px-4 py-3 sm:p-0">
      <Link to="/">

        </Link>

      <div className="sm:hidden">
        <button onClick={handleClick}   type="button" className="block text-gray-50 hover:text-white focus:text-white focus:outline-none">
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
{
          click?
            <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            :
            <path  fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
          </svg>
        </button>
      </div>
    </div>
 


          <nav className={` ${!click && 'hidden' } px-4 pt-2 pb-4 sm:flex sm:p-0 md:static md:w-auto absolute top-full w-full bg-[#ee5c33] `}>
            <Link to="/" className="lg:text-xs text-sm block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100">INICIO</Link>
      <Link to="/blog" className="lg:text-xs  text-sm mt-1 block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">NOTICIAS</Link>
      <Link to="/nosotros" className="lg:text-xs  text-sm mt-1 block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">NOSOTROS</Link>
            {/*  <Link to="/gallery" className="text-sm mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">Galería</Link>*/}
  <Link to="/guide" className="lg:text-xs  text-sm mt-1 block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">GUÍA DE ESPECIES</Link>
  <Link to="https://map-mision-arbol.vercel.app/" className="lg:text-xs  text-sm mt-1 block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">SITIOS RECUPERADOS</Link>
  <Link to="/contact" className="lg:text-xs  text-sm mt-1 block px-6 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">SOLICITUDES</Link>

    </nav>

  
  
 
    </header>
  </>
  );
};

export default Navbar;



export const Nav = styled.nav`


 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 999;

@media scree and (max-width: 960px){
    background: ${({click}) => (click ? "fff": "transparent")};
    transition: 0.8s all ease;
} 
`;
