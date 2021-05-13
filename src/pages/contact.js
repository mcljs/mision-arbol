import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/Seo"


const Contact = (  ) => (
  <Layout>
 <SEO title="Sugerencias" />
   <div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm dark:bg-[#24385b]">
            <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Solicitudes del Poder Popular</h1>
                <p className="text-gray-400 dark:text-gray-400">Se partidario de escribir una solicitud a la Fundación.</p>
            </div>
            <div className="m-7">
                <form action="https://formspree.io/f/xeqvqwdn" method="POST" id="form">

              


                    <div className="mb-6">
                        <label for="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre Completo</label>
                        <input type="text" name="name" id="name" placeholder="Michael Chacón" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Correo Electronico</label>
                        <input type="email" name="email" id="email" placeholder="arbol@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">

                        <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Numero de Telefono</label>
                        <input type="text" name="phone" id="phone" placeholder="0426-999-99-99" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <label for="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Escriba la solicitud</label>

                        <textarea rows="5" name="message" id="message" placeholder="Tu mensaje..." className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit" className="w-full px-3 py-4 text-white bg-yellow-1100 rounded-md focus:bg-indigo-600 focus:outline-none dark:text-[#03091e]">Enviar Solicitud</button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result">
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>

    </Layout>

)
export default Contact
