import React from 'react'
import Loaded from "../Loaded"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import DelayedFallback from './DelayedFallback';
import {TwitterTimeNico} from './TwitterTimeNico'
const Tweet = (  ) => {
   
const isSSR = typeof window === "undefined"

    return(
  

      <>
        {
          !isSSR &&(
 <React.Suspense fallback={ <DelayedFallback /> }>
   <div className="bg-[#1d9bf0]">
<h1 className="text-white text-center text-2xl xl:text-3xl pt-4"><strong>Twitter</strong></h1>
     <div className="xl:w-full grid grid-cols-1 xl:grid-cols-2  gap-4 p-2 md:p-8 ">
   
   
       <div className="text-center">
         <span className="text-white text-center text-2xl xl:text-2xl" >Cuenta Oficial del Presidente de la República Nicolás Maduro Moros</span>
      <TwitterTimeNico />
    </div>

    <div className="text-center">
      <span className="text-white text-center text-2xl xl:text-2xl pb-8">Cuenta Oficial de Fundación Misión Árbol</span>
      <div className="mt-0 xl:mt-8">
        <TwitterTimelineEmbed source Type="misionarbolven"
  screenName="misionarbolven"
  options={{height: 400}}/>
</div>

    </div>

  </div>
</div>
 </React.Suspense>
  )
        }

      </>

  )}
export default Tweet
