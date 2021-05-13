import React from 'react'
import Link from './link'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'



const Footer1 = (  ) => (
 <footer className="bg-[#be4928] dark:bg-[#03091e]">	
		<div className="container max-w-6xl mx-auto flex items-center px-7 py-8">

			<div className="w-full mx-auto flex flex-wrap items-center">
				<div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
					<Link className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" to="/">
            <h3 className="text-base sm:text-left text-center text-white "> Fundación  <strong>Misión Árbol</strong></h3>
  <h3 className="text-base text-white "> Ministerio del Poder Popular para el  <strong>Ecosocialismo</strong></h3>
					</Link>

				</div>

				<div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
			
					  <li>
						<Link to="https://www.facebook.com/Fundamiarbolven" aria-label='Facebook' className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:underline py-2 px-7">  <FaFacebook className="w-5 h-5" />
</Link>
					  </li>
					  <li>
						<Link to='https://www.instagram.com/fundamiarbolven/' aria-label='Instagram' className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:underline py-2 px-7">
<FaInstagram  className="w-5 h-5"/>
            </Link>
					  </li>
						<li>
						<Link  to='https://twitter.com/misionarbolven'
                aria-label='Twitter'
                rel='noopener noreferrer'
 className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:underline py-2 px-7" >
   <FaTwitter className="w-5 h-5"/>
            </Link>
					  </li>
					</ul>
				</div>
			</div>
        

		
		</div>
	</footer>

)
export default Footer1
