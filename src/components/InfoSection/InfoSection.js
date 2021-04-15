import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import { StaticImage} from 'gatsby-plugin-image'
import Descarga from '../../../static/assets/calendario-2021.pdf'

const Section = styled.section`
  width:100;
  height: 100%;
  padding: 4rem 0rem;
background-color: #fff2f2;
margin-top: -85px;

`;

const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -10px;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({reverse}) =>(reverse ? '1':'2')};

  h1{
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: clamp(1.4rem, 6vw, 2rem);
  }
  h3{
    margin-bottom: 1rem;
    
    font-size: 1.6rem;
  }
  p{
    margin-bottom: 2rem
  }
`

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({reverse}) => (reverse ? '2' : '1')};
  display: flex;
  justify-content: center;
  align-items: center;
background-color: #fffbec;

  @media screen and (max-width: 768px) {
  margin-top: -100px;
    order: ${({reverse}) =>(reverse ? '1':'2')};
  }

  img{
    width: 100%;
    height: 100%;
    object-fit:cover;

    @media screen and (max-width: 768px){
      width: 90%;
      height: 90%;
    }
  }
`

const InfoSection = ({paragrpahOne,paragrpahTwo,paragrpahThree, buttonLabel,reverse,}) => {
   

    return(
      <Section>
        <Container>
          <ColumnLeft>
            <h1 >Calendario Ecosocialista</h1>
            <h3><strong>ABRIL 2021</strong></h3> 
            <h3><strong>07.-</strong>Día Mundial de la Salud</h3>
            <h3><strong>20.-</strong>Día del Caimán del Orinoco</h3>
            <h3><strong>22.-</strong>Día Mundial de la tierra</h3>
            <h3><strong>24.-</strong>Día internacional de la Concientización respectro al Ruido</h3>






             <Button src={Descarga} primary='true'>Descargar</Button>
          
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <StaticImage 
            src="../../assets/calendario-img.png" 
              alt="home"
              placeholder="tracedSVG"
            width={550}
            /> 
          </ColumnRight>
        </Container>
      </Section>
  );
}
export default InfoSection
