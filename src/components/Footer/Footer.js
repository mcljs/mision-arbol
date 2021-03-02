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
import logo from '../../images/Imagen4.png'
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
                    
                        @media screen and (max-width: 920px){
                          width: auto;
                          height: 50px;
                          }
                        `}/>
            <img src={logo} alt={logo}   css={`
                         width: auto;
                        height: 80px;
                         margin-left: 40px;
                         margin-bottom: -30px;
                         margin-top: -40px;

                        @media screen and (max-width: 920px){
                          width: auto;
                          height: 50px;
                          }
                        `}/>

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
