import styled from 'styled-components';
import { MdArrowForward} from '@react-icons/all-files/md/MdArrowForward';
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight';


export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  margin-top: -100px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
background: linear-gradient(
      180deg, 
      rgba(0,0,0,0.4) 0%, 
      rgba(0,0,0,0.6) 100%
    ), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);

    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 23px;
  margin-top: -90px;
  display: flex;

  flex-direction: column;
 
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 4.4rem;
  text-align: center;
  font-weight: 700;
  text-shadow: 2px 2px 2px #000;

  strong{
  font-weight: 700;
  text-shadow: 2px 2px 2px #000;
  color: #a4bc4f;
  }
  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
 font-family: 'Noto Serif', serif;
color: #fff;
    font-size: 1.5rem;
  text-shadow: 2px 2px 2px #000;
    line-height: 30px;
    font-style: italic;

  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
 
`;

export const HeroH4 =styled.h4`
  margin-top: 24px;
  font-size: 1.3rem;
font-weight: 600;
padding-right: 57px;
color: #fff;
  text-align: right;
text-shadow: 0px 0px 9px #000;
  @media screen and (max-width: 768px) {
  font-size: 1.2rem;
  padding-left: 57px;
     text-align: center;
  }
 
`

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
