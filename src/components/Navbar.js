import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StaticImage} from 'gatsby-plugin-image'
import Link from './link'
import Banner from '../images/bannerweb.png'
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
 
      <img className="dark:bg-[#0e182a] bg-[#98b63e] bg-cover bg-center mb-2 w-full h-full sm:h-[144px]" alt={Banner} src={Banner}  />


      
    



       <nav className='flex items-center flex-wrap bg-[#be4928] dark:bg-[#0e182a] -mt-2'>
      
        <button  onClick={handleClick} className=' inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none'  aria-label='Menu'>
        {
          click?
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
            />
          </svg>
          :
   <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
            />
          </svg>
   }        </button>
 <div
          className={`${
            click ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto '>
            <Link to='/' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                INICIO
            </Link>
            <Link to='/blog' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                NOTICIAS
            </Link>
            <Link to='/nosotros' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                NOSOTROS
            </Link>
            <Link to='/biblioteca' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                BIBLIOTECA
            </Link>
      <Link to='/gallery' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                GALERÍA
            </Link>
            <Link to='/guide' className='lg:inline-flex lg:w-auto w-full lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                GUÍA DE ESPECIES
            </Link>
            <Link to='/map' className='lg:inline-flex lg:w-auto w-full  lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                SITIOS RECUPERADOS
            </Link>
            <Link to='/contact' className='lg:inline-flex lg:w-auto w-full  lg:px-9 px-3 py-2 rounded text-white lg:text-xs text-sm font-bold items-center justify-center hover:bg-yellow-1100 hover:text-white dark:hover:bg-[#98ca3f] dark:hover:text-[#03091e]'>
                SOLICITUDES
            </Link>
          </div>
        </div>      
    </nav>  </>
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
