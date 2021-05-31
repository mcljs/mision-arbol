import React from 'react';
import {css} from '@emotion/react'
import {TwitterShareButton, FacebookShareButton} from 'react-share';
import Link from '../link'


const Share = ({url, title, twitterHandle}) => (
  <>
  

  <div className="py-14 max-w-screen-lg mx-auto mb-8 flex flex-col items-center justify-center px-7">
   
    <h2 className="sm:text-2xl text-xl font-bold text-center leading-tight dark:text-white">Comparte este artículo con tus amigos</h2>
    <div className="mt-4 flex items-center justify-center flex-wrap">

      
 <TwitterShareButton
   url={url}
      title={title}
      via={twitterHandle}
    >
   <Link  className="flex items-center py-2 px-3 leading-6 rounded-lg bg-gray-100 m-1 hover:bg-gray-200 transition-colors ease-in-out duration-200 dark:bg-[#132035]"
>

       <svg className="mr-1 text-blue-1000" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path></g></svg>
   <span className="dark:text-white">Tweet</span>
 </Link>

    </TwitterShareButton>
    <FacebookShareButton className="flex items-center py-2 px-3 leading-6 rounded-lg bg-gray-100 m-1 hover:bg-gray-200 transition-colors ease-in-out duration-200"
      url={url}
      quote={title}
      via={twitterHandle}
      css={css`
        cursor: pointer;
      `}
    >
  <Link  className="flex items-center py-2 px-3 leading-6 rounded-lg bg-gray-100 m-1 hover:bg-gray-200 transition-colors ease-in-out duration-200 dark:bg-[#132035]"
>
  <svg className="mr-1 text-blue-1000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="22px" height="22px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/></svg>
    <spa className="dark:text-white">Facebook</spa>
  </Link>
    </FacebookShareButton>


    </div>
     </div>
  </>

)

export default Share
