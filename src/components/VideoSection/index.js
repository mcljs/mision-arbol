import React from 'react'
import './style.css'
import Video from '../../video/LA MISIÓN ÁRBOL (online-video-cutter.com).mp4';
import Link from '../link';
const VideoSection = (  ) => (
  <>
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div className="video-docker absolute top-0 left-0 w-full sm:h-[30.05rem] h-[28.85rem] overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" autoPlay loop muted src={Video} type='video/mp4'></video>
    </div>
    <div className="video-content space-y-2 mb-28">
      <h1 className="text-6xl font-black leading-tight text-white">Mision <span className="text-yellow-1100">Arbol</span></h1>
        <h2 className="font-bold text-white text-2xl">   "Comencemos salvando los bosques, salvando las agua, nuestra madre naturaleza"</h2>
    <h2 className="font-light text-white text-2xl">Comandante Hugo Chavéz</h2>
  <div className="inline-block mr-2 mt-2">
    <Link to="/nosotros">
      <button className="px-7 py-2 rounded-full text-white bg-[#455e29] font-semibold hover:bg-[#7daa49]">Siguenos</button></Link>
                </div>
    </div>

</section>
  </>
)
export default VideoSection
