import React from 'react'
import Loaded from "../Loaded"
import { TwitterTimelineEmbed } from 'react-twitter-embed'


const Tweet = (  ) => {
   

    return(
  <div className="xl:w-full grid grid-cols-1 xl:grid-cols-10  gap-4 p-2 md:p-8 bg-[#1d9bf0]">
    <div className="flex justify-between mb-4 xl:col-start-3 xl:col-end-8">
      <h1 className="text-white text-2xl xl:text-3xl"><strong>Twitter</strong></h1>
    </div>
  <React.Suspense fallback={ <Loaded/> }>
    <div className=" grid grid-cols-1  xl:col-start-1 xl:col-end-6 ">
      <span className="text-white text-2xl xl:text-2xl" >Cuenta Oficial Del Presidente de La República</span>
    <TwitterTimelineEmbed source Type="NicolasMaduro"
  screenName="NicolasMaduro"
  options={{height: 400}}/>
    </div>
    <div className="w-full mt-10 xl:mt-0 xl:col-start-6 xl:col-end-11 xl:ml-6">
      <span className="text-white text-2xl xl:text-2xl ">Cuenta Oficial Fundación Misión Árbol</span>
    <TwitterTimelineEmbed source Type="misionarbolven"
  screenName="misionarbolven"
  options={{height: 400}}/>
    </div>
 </React.Suspense>
  </div>
  );
}
export default Tweet
