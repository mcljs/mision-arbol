import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StaticImage} from 'gatsby-plugin-image'
const Link = React.lazy(()=> import('./link'))

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

const isSSR = typeof window === "undefined"

  return (
    <>
      <Nav scrollNav={scrollNav}  >
        <header   className="border-b border-yellow-1100 bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2 border-b border-gray-800">
    <div className="flex items-center justify-between px-4 py-3 sm:p-0">
      <Link to="/">
      <StaticImage 
        className='flex items-center w-9 ml-3'  
        src='https://res.cloudinary.com/dk5bvgq20/image/upload/q_18/v1616806926/assets/Imagen4_trecro-min_okm9fr.webp' 
        alt="logo" 
        placeholder="blurred"
        width={100}/>
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
 
{!isSSR &&(

  <React.Suspense fallback={ 

    <div className="grid grid-flow-col gap-2 items-center sm:text-sm text-xs">
      <div className="grid grid-flow-col gap-5 items-center sm:text-sm text-xs sm:pr-2">
        <div className="h-5 rounded-md bg-gray-300 relative overflow-hidden w-16 h-6">
          <div className="w-24 h-5 bg-gray-400 absolute" style={{filter: 'blur(20px)'}}></div>
        </div>
        <div className="h-5 rounded-md bg-gray-300 relative overflow-hidden w-6 h-6">
          <div className="w-24 h-5 bg-gray-400 absolute"  style={{filter: 'blur(20px)'}}></div>
        </div>
      </div>
      </div>
    }>

          <nav className={` ${!click && 'hidden' } px-2 pt-2 pb-4 sm:flex sm:p-0 md:static md:w-auto absolute top-full w-full bg-gray-900 `}>
      <Link to="/" className="text-sm block px-2 py-1 text-white font-semibold rounded hover:bg-yellow-1100">Inicio</Link>
      <Link to="/blog" className="text-sm mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">Noticias</Link>
      <Link to="/nosotros" className="text-sm mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">Nosotros</Link>
  <Link to="/guide" className="text-sm mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-yellow-1100 sm:mt-0 sm:ml-2">Guia de Especie</Link>
    </nav>
 </React.Suspense>
      )}
  
  
 
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
