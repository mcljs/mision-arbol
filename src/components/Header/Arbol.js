
import React from 'react'
import styled from 'styled-components';
import {  StaticImage} from "gatsby-plugin-image"
import {GiFruitTree} from '@react-icons/all-files/gi/GiFruitTree';
import {GiStairsGoal} from '@react-icons/all-files/gi/GiStairsGoal'



const Testimonials = () =>{
 
   return(
    <TestimonialsContainer>
      <TopLine>
        Ministerio del Poder Popular para el Ecosocialismo
      </TopLine>
      <Description>
        Misión Árbol
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <GiFruitTree  css={`
          color: #3fffa8; 
          font-size:2rem; 
          margin-bottom: 1rem
          `} />
            <h3>Nuestra Labor</h3>
            <p>"Reivindicar el llamado a la Siembra, Reforestación y la Recuperación de espacios (que antes fueron verdes)."</p>
          </Testimonial>
        <Testimonial>
          <GiStairsGoal css={`
          color: #ffc500;; 
          font-size:2rem; 
          margin-bottom: 1rem
          `} 
          />
            <h3>Meta a Alcanzar</h3>
            <p>"Plantar tres millones de árboles, la manera más fácil de hacerlo es incorporando a toda la población venezolana, sin distinción de raza, credo, ni ningún otro aspecto, el tema ambiental nos compete a todos, es corresponsabilidad histórica y ambiental"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
        
            <StaticImage className="rounded-3xl" src="https://res.cloudinary.com/dk5bvgq20/image/upload/c_limit,h_996,q_85/a_0/v1616808985/assets/unnamed_f6rfel-min_mqqalq.jpg" placeholder="tracedSVG" width={400}/> 
               <StaticImage className="rounded-3xl" src="https://res.cloudinary.com/dk5bvgq20/image/upload/q_87/v1616807391/assets/img-3_qwe31h-min_nvyg0d.jpg" placeholder="tracedSVG" width={400}/> 
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
)
}
export default Testimonials


const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`
const TopLine = styled.div`
  color: #3740ff;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
 @media screen and (max-width: 768px){
    font-size: 0.85rem;
  }
`


const Description = styled.div`
  text-align: strat;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
 grid-template-rows: 1fr fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;
  h3 {
    margin-bottom: 1rem;
    font-size: 1.350rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b
  }
`
const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;
  @media screen and(max-width: 500px){
    grid-template-columns: 1fr;
  }
`

