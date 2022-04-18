// Dependencies
import * as React from 'react'
import clsx from 'clsx'
import { useWindowScroll, usePrevious } from 'react-use'

// Internals
import Link from '../link'
import MobileHeader from './MobileHeader'
//import MobileHeader from './MobileHeader'
//import DarkModeToggle from './DarkModeToggle'
//import type { MyLocale } from 'i18n'
import {StaticImage} from "gatsby-plugin-image"
// eslint-disable-next-line spaced-comment
import Banner from '../../images/banner.jpg'
import Logo from '../../images/Nuevo logo Mision arbol.ai1-01 (1).png'

export const Header = (): JSX.Element => {

  const { y } = useWindowScroll()
  const prevY = usePrevious(y)

  return (
    <>
 <img className="dark:bg-[#0e182a] bg-[#98b63e] bg-cover bg-center w-full h-full sm:h-[144px] flex  top-0 z-50 cursor-text" alt={Banner} src={Banner}  />
    <header
      className={clsx(
        'flex sticky top-0 z-50 items-center w-full h-16 bg-gray-100 dark:bg-[#03091e] shadow dark:shadow-none transition-transform duration-150 transform md:h-auto',
        prevY
          ? y < 276 || prevY > y
            ? 'translate-y-0'
            : '-translate-y-full'
          : 'translate-y-0'
      )}
      id="sticky-nav"
    >
 

      <div className="hidden relative md:flex md:flex-1 md:px-8">

        <nav className="container flex relative flex-wrap justify-end items-center">
          <div className="relative flex-1 flex-shrink-0">
            <Link
              className="inline-flex"
              to="/"
              title='Inicio'
            >
              <img src={Logo} alt="logo" className="w-28 h-16 "/>
                        </Link>
          </div>

          <div className="flex items-center mr-6 ml-10 bg-transparent">
            <div className="flex justify-center items-center">
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/"
                title="Inicio"
              >
                Inicio
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/blog"
                title="Noticias"
              >
                Noticias
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/nosotros"
                title="Nosotros"
              >
                Nosotros
              </Link>
              <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/biblioteca"
                title="Biblioteca"
              >
                Biblioteca
              </Link>
 <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                  to="/gallery"
                  title="Galería"
              >
                Galería
              </Link>
 <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                  to="/guide"
                  title="Galería"
              >
                Guía de Especies
              </Link>
 <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                  to="/map"
                  title="Galería"
              >
                Sitios Recuperados
              </Link>

   <Link
                className="py-7 px-3 text-sm font-medium text-[#ec222c] dark:text-primary dark:hover:text-white focus-visible:rounded focus-visible:ring-2 focus-visible:ring-black transition duration-200 focus:outline-none"
                to="/contact"
                title="Solicitudes"
              >
                Solicitudes
              </Link>
                          </div>

            <div className="flex ml-3 space-x-6">
             
            </div>
          </div>

          
        </nav>
      </div>

      <MobileHeader /> 
    </header>
    </>
  )
}

export default React.memo(Header)
