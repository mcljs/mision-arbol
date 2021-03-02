import React from "react"


const HeaderLayout = ({heading,image}) => (
 
 <div className="h-screen flex flex-col	">
 <div
          className="
            relative flex items-center justify-center h-full
            bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{
            backgroundImage: `url(${image})`
          }}
 > 
  {heading && <h1 className="
            relative px-2.5 text-white uppercase z-10 text-5xl text-center md:text-7xl
          ">
            {heading}
          </h1>}
<div
            className="
              z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-50
            "
          />
 </div>
 </div>
 )

export default HeaderLayout

