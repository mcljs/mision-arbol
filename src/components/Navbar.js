import React, { useState, useEffect } from 'react'
import Link from './link'
import logo from '../images/logo.svg'
import logo1 from '../images/logo-a.png'
import styled from 'styled-components'



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
      <Nav scrollNav={scrollNav}  >
        <header   className="border-b border-red-100 bg-green-600 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 border-b border-gray-800">
    <div className="flex items-center justify-between px-4 py-3 sm:p-0">
      <img src={logo1} alt={logo1}
                         css={`
                         width: auto;
                         margin-top: -3px;
                         margin-bottom: -5px;
                         height: 60px;
                         margin-left: 10px;
                        @media screen and (max-width: 920px){
                          width: auto;
                          height: 60px;
                          }
                        `}
                    />
      <div>

         <img src={logo} alt={logo}
                         css={`
                         width: auto;
                         margin-top: -3px;
                         margin-bottom: -5px;
                         height: 60px;
                         margin-left: 30px;
                        @media screen and (max-width: 920px){
                          width: auto;
                          height: 60px;
                          }
                        `}
                    />
      </div>
      <div className="sm:hidden">
        <button onClick={handleClick}   type="button" className="block text-gray-50 hover:text-white focus:text-white focus:outline-none">
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
{
          click?
            <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
            :
            <path  fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
          </svg>
        </button>
      </div>
    </div>
    {

    click?
  <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0 ">
      <Link to="/" className="block px-2 py-1 text-white font-semibold rounded hover:bg-green-500">Inicio</Link>
      <Link to="/blog" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2">Noticias</Link>
      <Link to="/nosotros" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2">Quienes Somos</Link>
    </nav>

    :
    <nav className="px-2 pt-2 pb-4 sm:flex  sm:p-0 hidden">
      <Link to="/" className="block px-2 py-1 text-white font-semibold rounded hover:bg-green-500">Inicio</Link>
      <Link to="/blog" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2">Noticias</Link>
      <Link to="/nosotros" className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2">Nosotros</Link>
    </nav>
    }
    </header>
</Nav>

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
