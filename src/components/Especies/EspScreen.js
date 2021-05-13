import {navigate, Redirect, useParams} from '@reach/router';
import React, {useMemo} from 'react'
import {getEspById} from '../../selectors/getEspById';
import Layout from '../layout';
import SEO from '../Seo';
import Transcript from './Transcript';


const EspScreen = (  ) => {

 const {especieId} = useParams();

   const esp = useMemo(()=>  getEspById(especieId), [especieId])

   if(!esp){
      return <Redirect to="/"/>
   }

   const handleReturn = () => {
      if(window.history.length <= 2){
         navigate('/guide')
      } else {
        navigate(-1)
   }
       }

   const {
      title,
      publisher,
      title_cientifico,
      caracteristicas_fisicas,
      propiedades,
      imageURL
   } = esp;

   let newText = caracteristicas_fisicas.split('\n').map((item, i) => <p style={{marginBottom: '5px'}} key={i}>{item}</p>)
  let newPropiedades = propiedades.split('\n').map((item, i) => <p style={{marginBottom: '5px'}} key={i}>{item}</p>)
    return(
     
 <Layout>
  <SEO title={title_cientifico}/>
  <section className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover dark:bg-[#121f3d] pt-8" >
<div className="max-w-4xl flex items-center h-auto  flex-wrap mx-auto my-32 lg:my-0 dark:bg-[#121f3d]">
    

	<div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-3xl bg-white opacity-85 mx-6 lg:mx-0 dark:bg-[#121f3d]">
	

		<div className="p-4 md:p-12 text-center lg:text-left">
					<img src={imageURL} className="block lg:hidden  shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" alt="img" />
			 <span class="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">{publisher}</span>
			<h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">{title}</h1>
			<div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 dark:border-yellow-1100 dark:opacity-100 opacity-25"></div>
		
      <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start dark:text-white"><svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg><strong>Nombre Científico: </strong>{title_cientifico}</p>
       <Transcript className="dark:text-white">
          <p className="pt-8 text-sm text-justify dark:text-white"><strong>Características Físicas: </strong><span>{newText}</span>
</p>
      <p className="pt-8 text-sm text-justify dark:text-white"><strong>Propiedades: </strong>{newPropiedades}      
</p>
</Transcript>

<div className="pt-12 pb-8">
				<button onClick={handleReturn} className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
				  Regresar
				</button> 
			</div>
   



		
	
			
	

		</div>

    
	</div>

	<div className="w-full lg:w-2/5">

		<img src={imageURL} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt="img"/>

	</div>
	
	



</div>


</section>
<footer className="border-b-8 border-blue-500"></footer>
</Layout>

  );
}
export default EspScreen
