import React,{useState} from 'react';
import Video from '../../video/LA MISIÓN ÁRBOL (online-video-cutter.com).mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroH4,
HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroSectionElements';
import {Button} from './ButtonElements'
const HeroSection = () => {

  
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Misión <strong>Arbol</strong></HeroH1>
        <HeroP>
          "Comencemos salvando los bosques, salvando las agua, nuestra madre naturaleza"        </HeroP>
        <HeroH4>Comandante Hugo Chavéz</HeroH4>
        <HeroBtnWrapper>
          <Button
            to='/nosotros'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Siguenos {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
