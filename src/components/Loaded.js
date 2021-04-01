import React from 'react'
import LoaderSVG from '../images/loader.svg'
const Loaded = (  ) => (

    <div className="flex items-center bg-[#f9fafc] justify-center absolute z-100 inset-0">
              <img src={LoaderSVG} alt="loader spinner" width="150" height="150"/>
        </div> 
)
export default Loaded
