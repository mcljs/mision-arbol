import React from 'react';
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {FaInstagram} from '@react-icons/all-files/fa/FaInstagram';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,

} from './FooterElements';

import Link from '../link'
function Footer() {
  return (
    <>
<FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
     
            <img src="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616371445/assets/unnamed_nixw5r.png" alt="MINEC"   css={`
                         width: auto;
                        height: 60px;
                         margin-left: 20px;
                         margin-bottom: -30px;
                         margin-top: -30px;

                        @media screen and (max-width: 920px){
                          width: auto;
                          margin-left: 1px;
                          height: 50px;
                          }
         @media screen and (max-width: 480px){
                          margin-left: -5px;
                                                 
                          }
                        `}/>
<h1 style={{fontSize: '3rem',fontWeight: '200'}}
                         css={`
                         width: auto;
                         margin-top: -14px;
                         margin-bottom: -1px;
                         height: 60px;
                        
                         color: #fff;
                         margin-left: 13px;
                        @media screen and (max-width: 920px){
                          margin-left: 1px;
                          width: auto;
                          margin-top: -31px;
                          margin-bottom: -4px;
                          height: 50px;
                          font-size: 0.8rem;
                         
                          }
                        `}
         > |</h1>
 <h3 
                         css={`
                         width: auto;
                         margin-top: -3px;
                         padding-top: 13px;
                         margin-bottom: -5px;
                         font-size: 0.9rem;
                         height: 60px;
                         color: #fff;
                         margin-left: 20px;
                        @media screen and (max-width: 920px){
                          margin-left: 3px;
                          width: auto;
                          height: 50px;
                          font-size: 0.8rem;
                          padding-right: 40px;
                          }
                @media screen and (max-width: 480px){
                          margin-left: 3px;
                          margin-bottom: 2px;
                          width: auto;
                          height: 50px;
                          padding-right: 1px;
                          font-size: 0.720rem;
                        
                          }
                        `}
         > Fundación <strong>Misión Arbol</strong></h3>
            </SocialLogo>
            <SocialIcons>
              <Link  to='https://www.facebook.com/Fundamiarbolven' aria-label='Facebook'>
                <FaFacebook style={{color: '#fff' ,fontSize: '20px'}}/>

              </Link>
       <Link to='https://www.instagram.com/fundamiarbolven/' aria-label='Instagram'>
                <FaInstagram style={{color: '#fff' ,fontSize: '20px'}}/>

              </Link>
              <Link
                to='https://twitter.com/misionarbolven'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter style={{color: '#fff' ,fontSize: '20px'}}/>
              </Link>
              </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>

    <div className="bg-yellow-1050">
      <footer className="max-w-screen-xl w-full mx-auto xl:px-0 px-5">
    
  <small className="space-x-6 py-6 text-xs w-full flex items-center md:justify-end justify-center text-white ">
   © {new Date().getFullYear()} Gobierno Bolivariano de Venezuela - Ministerio del Poder Popular para el Ecosocialismo • Misión Arbol. Todos los derechos reservados.   </small>
    </footer>
</div>
    </>
  );
}

export default Footer;
