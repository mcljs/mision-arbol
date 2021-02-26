
import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {GiFruitTree} from '@react-icons/all-files/gi/GiFruitTree';
import {GiStairsGoal} from '@react-icons/all-files/gi/GiStairsGoal'
import {graphql, useStaticQuery} from 'gatsby';


const Testimonials = () =>{
  const data = useStaticQuery(graphql`
  query {
  allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
    name: {in: ["arbol-2","img-3"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
  `)
  return(
    <TestimonialsContainer>
      <TopLine>
        Ministerio del Poder Popular para el Ecosocialismo
      </TopLine>
      <Description>
        Misión Arbol
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
            <p>"Plantar tres millones de árboles, la manera más fácil de hacerlo es incorporando a toda la población venezolana, sin distinción de raza, credo, ni ningún otro aspecto, el tema ambiental nos compete a todos, es corresponsabilidad histórica y ambienta"</p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image,key) =>(

            <Images key={key} fluid={image.node.childImageSharp.fluid}/> 
          ))}
      
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
  color: #e2191a;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
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
    font-size: 1.5rem;
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
const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
  `
