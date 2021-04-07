import React from "react"
import Layout from "../components/layout"
import HeaderLayout from "../components/HeaderLayout"
import SEO from "../components/seo"

import {StaticImage} from "gatsby-plugin-image"
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
import {FaFacebookF} from '@react-icons/all-files/fa/FaFacebookF'
import Link from "../components/link"


const Nosotros = () => (
  <Layout>
    <SEO title="Nosotros" />
  <HeaderLayout 
      heading="Nosotros"
      image="https://res.cloudinary.com/dk5bvgq20/image/upload/q_30/v1616785408/assets/EtWvLINWQAADJ_I_b3peur.webp" />
   
<section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  
                </div>
              </div>

             

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
               
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  <span className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-5 h-5  shadow-lg rounded-full bg-yellow-1100"></span> Misión
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                 Somos el ente encargado de contribuir
con la construcción de un nuevo modelo
de desarrollo, fundamentado en la
recuperación, conservación y uso
sustentable de los bosques, el equilibrio
ecológico y la recuperación de espacios
degradados, mediante la participación
protagónica del Poder Popular, las
comunidades organizadas y movimientos
ambientalistas.
                </p>
              
              
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <StaticImage
                   
                    src="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616366782/assets/jurid_e07bpu.jpg"
                    alt="..."
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "70px",
                        top: "-64px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                     Naturaleza Jurídica de la Fundación Misión Árbol
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Es una Fundación del Estado, sin fines empresariales, con personalidad jurídica y patrimonio propio, bajo la adscripción, rectoría, y control estatutario del Ministerio del Poder Popular para el Ecosocialismo.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>

<section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "92px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <StaticImage
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.pexels.com/photos/4207909/pexels-photo-4207909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-16 sm:mt-0">
                <div className="md:pr-12">
                 
                  <h3 className="text-3xl font-semibold">
                    <span className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-5 h-5  shadow-lg rounded-full bg-blue-1000"></span> Visión
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                     Ser el ente rector de las políticas públicas
destinadas a incentivar la conciencia
colectiva ecológica sobre la importancia
de los bosques, el equilibrio ecológico y la
recuperación de espacios degradados,
particularmente en quienes habitan en
áreas rurales, impulsando una nueva ética
ambientalista para mejorar la calidad de
vida de la población venezolana, el rescate
y la protección de la flora, así como saldar
la deuda histórica que la población que tiene con nuestro ecosistema.     
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
  <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Objetivo
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
              La Fundación Misión Árbol, es el ente encargado de la recolección de semillas, producción de plantas, plantación, mantenimiento, recuperación, conservación y uso sustentable de los bosques, para el mejoramiento de la calidad de vida de la población, el rescate y la protección de la flora, así como saldar la deuda histórica que la población tiene con nuestro ecosistema, impulsando el reconocimiento de los Derechos Ambientales y los Derechos de la Madre Tierra en la Ética de la Mujer y el Hombre Nuevo.
                </p>
              </div>
            </div>
          
 <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                 
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                     src="https://pbs.twimg.com/profile_images/1037101550571806722/zYacZcEJ_400x400.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Wilmer Vásquez
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                     Presidente de la Fundación
                    </p>
                    <div className="mt-6">
                      <Link to="https://twitter.com/wilmervasquezm?lang=es"> 
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      <AiOutlineTwitter className="ml-2"/>
                        </button>
                      </Link>

                      <Link to="https://www.facebook.com/wilmer.vasquez.94617"> 
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                      
                          <FaFacebookF className="ml-2"/>
                      </button>
                      </Link>                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616367021/assets/ministro_yrckfo.jpg"
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Oswaldo Barbera
                    </h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Ministro del poder popular para el ecosocialismo
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  
                </div>
              </div>
 </div>



            
           
          </div>
        </section>
      
  </Layout>
)

export default Nosotros
