import React from 'react'
import './style.css'
import Video from '../../video/LA MISIÓN ÁRBOL (online-video-cutter.com).mp4';
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
      <h1 className="text-6xl font-black leading-tight text-white">Misión <span className="text-yellow-1100">Árbol</span></h1>
        <h2 className="font-bold text-white text-2xl">   "Acabar con la esterilidad de los suelos y sembrar árboles en los causes de los ríos para evitar que los mismos se sequen"</h2>
    <h2 className="font-light text-white text-2xl">Simón Bolívar </h2>
  <div className="inline-block mr-2 mt-2">
    <Link to="https://www.facebook.com/Fundamiarbolven" aria-label='Facebook'>
      <button className="px-7 py-2 rounded-full text-white bg-[#455e29] font-semibold hover:bg-[#7daa49] focus:bg-indigo-600 xl:mr-2 "> <FaFacebook className="w-6 h-6" />
</button></Link>
    
 <Link to='https://twitter.com/misionarbolven' aria-label='Twitter'>
      <button className="px-7 py-2 rounded-full text-white bg-[#455e29] font-semibold hover:bg-[#7daa49]">   <FaTwitter className="w-6 h-6"/></button></Link>

 <Link to='https://www.instagram.com/fundamiarbolven/' aria-label='Instagram'>
      <button className="px-7 py-2 rounded-full text-white bg-[#455e29] font-semibold hover:bg-[#7daa49] ml-2"><FaInstagram  className="w-6 h-6"/>
</button></Link>

                </div>
    </div>

</section>
  </>
)
export default VideoSection
