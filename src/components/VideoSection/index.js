import React from 'react'
import './style.css'
import Video from '../../video/VID-20210603-WA0135.mp4';
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import Link from '../link';
const VideoSection = (  ) => (
  <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full  h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" autoPlay loop muted src={Video} type='video/mp4'></video>
    </div>
    <div className="video-content space-y-2 mb-28">
      <h1 className="text-5xl sm:text-6xl font-black leading-tight text-yellow-1100">Misión <span className="text-yellow-1100">Árbol</span></h1>
      <h2 className="font-bold text-white text-md sm:text-2xl">   "Comencemos salvando los bosques, salvando las aguas, nuestra madre naturaleza"</h2>
      <h2 className="font-light text-white text-md sm:text-2xl">Comandante Hugo Chavéz</h2>
      <div className="inline-block grid grid-cols-3 xl:px-72 lg:px-72 md:px-46 px-16 gap-1">
    <Link to="https://www.facebook.com/Fundamiarbolven" >
      <button  className="px-5 sm:px-7 py-2 rounded-full   text-[#03091e] bg-[#98ca3f] hover:bg-[#c1df8b] font-semibold" aria-label='Facebook'> <FaFacebook className="w-4 sm:w-6 h-6 text-center" />
</button></Link>
    
 <Link to='https://twitter.com/misionarbolven' >
      <button  className="px-5 sm:px-7 py-2 rounded-full text-[#03091e] bg-[#98ca3f] hover:bg-[#c1df8b] font-semibold " aria-label='Twitter'>   <FaTwitter className="w-4 sm:w-6 h-6"/></button></Link>

 <Link to='https://www.instagram.com/fundamiarbolven/' >
      <button className="px-5 sm:px-7 py-2 rounded-full text-[#03091e] bg-[#98ca3f] hover:bg-[#c1df8b] font-semibold" aria-label='Instagram'><FaInstagram  className="w-4 sm:w-6 h-6"/>
</button></Link>

                </div>
    </div>

</section>
  </>
)
export default VideoSection
