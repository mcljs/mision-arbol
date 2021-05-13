import React, {useMemo} from 'react'
import queryString from 'query-string'
import Layout from '../layout';
import Book from './Book';
import {FiSearch} from '@react-icons/all-files/fi/FiSearch'
import {useForm} from '../../hooks/useForm';
import {useLocation} from '@reach/router';
import {getEspeciesByName} from '../../selectors/getEspeciesByName';


const SearchScreen = ({navigate}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

   
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

   const especiesFiltered = useMemo(() => getEspeciesByName(q) , [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }

    return(
  <Layout>
 <div className="main pb-4">
    <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">

       
        <div className="hero">
            
            <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                <h1 className=" font-bold text-3xl text-gray-900 dark:text-white">Buscador de Guia de Especies</h1>
                <p className=" font-base text-base text-gray-600 dark:text-white">Si no encuentras la especie que buscas, puedes solicitarnos su inclusión en la guía.</p>
            </div>

           
            <div className="box pt-6">
                <div className="box-wrapper">

                    <form onSubmit={handleSearch} className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200 dark:bg-gray-900 dark:text-white">
                       
                        <button className="outline focus:outline-none"  aria-label="Mute volume"><FiSearch className="mr-2" role="button"/></button>

                                                    <input 
                        type="search" 
                        name="searchText" 
                        id=""  
                        placeholder="Buscar..." 
                        x-model="q" 
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}
                        />
                     
                    </form>
                  
                </div>
            </div>

            <section id="photos" className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
               
                {
                (q === '')
                        && 
                 <div class="alert flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
			<div class="alert-icon flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span class="text-blue-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 class="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div class="alert-content ml-4">
				<div class="alert-title font-semibold text-lg text-blue-800">
					Información
				</div>
				<div class="alert-description text-sm text-blue-600">
					Coloque la especie a encontrar
				</div>
			</div>
		</div>
		             }

                {
                (q !== '' && especiesFiltered.length === 0)
                        && 
                <div class="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
			<div class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span class="text-red-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 class="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div class="alert-content ml-4">
				<div class="alert-title font-semibold text-lg text-red-800">
					Error
				</div>
				<div class="alert-description text-sm text-red-600">
					La especie {q} no se consiguio en la busqueda
        </div>
			</div>
		</div>
                }




                {
                    especiesFiltered.map(esp =>(
                        <>
         <h2 className="text-2xl dark:text-white">Resultado</h2>
                        <ul>
                            <Book 
                            key={esp.id}
                            {...esp}
                        />
                    </ul>
                        </>
                    ))
                }

              </section>

        </div>

        
    </div>
</div>
  </Layout>
  );
}
export default SearchScreen
