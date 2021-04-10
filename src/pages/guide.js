import React from 'react';


import Guide from '../modules/Guide_index'
import {Router} from '@reach/router'

import SEO from '../components/Seo'
import EspScreen from '../components/Especies/EspScreen';
import SearchScreen from '../components/Especies/SearchScreen';

const Ejes = () =>{



  return(
        <>
                <SEO title="Guia de Especie"/>
                    <Router>
              
                  <Guide path="/guide" />
                      <EspScreen path="/guide/:especieId"/>
                      <SearchScreen path="/guide/search"/>
                   </Router>
                                   </>
   
)}

export default Ejes
