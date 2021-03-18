import React from 'react';


import Guide from '../modules/Guide_index'
import {Router} from '@reach/router'

import SEO from '../components/seo'

const Ejes = () =>{



  return(
        <>
                <SEO title="Biblioteca Digital"/>
                    <Router>
              
                  <Guide path="/guide" />
                         
                   </Router>
                                   </>
   
)}

export default Ejes
