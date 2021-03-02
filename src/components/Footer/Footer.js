import React from 'react';
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook'
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter'
import {GiFruitTree} from '@react-icons/all-files/gi/GiFruitTree';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

import logo2 from '../../images/unnamed.png'
function Footer() {
  return (
    <>
<FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
     
            <img src={logo2} alt={logo2}   css={`
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
                          margin-left: -20px;
                                                 
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
                          margin-top: -27px;
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
                         padding-top: 12px;
                         margin-bottom: -5px;
                         font-size: 1.1rem;
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
                          padding-right: 10px;
                          font-size: 0.720rem;
                        
                          }
                        `}
         > Fundación <strong>Misión Arbol</strong></h3>
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />

              </SocialIconLink>
       <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <GiFruitTree />

              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
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
