import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { StaticImage } from "gatsby-plugin-image"

const Section = styled.section`
  width: 100;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #fff2f2;
`

const Container = styled.div`
  padding: 3rem calc((100vw-1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 3rem;
    padding-bottom: 5rem;
    margin-top: 44px;
  }
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};

  h1 {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: clamp(1.4rem, 6vw, 2rem);
  }
`

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fffbec;

  @media screen and (max-width: 768px) {
    margin-top: 7rem;
    order: ${({ reverse }) => (reverse ? "1" : "2")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`

const InfoSection = ({ reverse }) => {
  return (
    <Section className="dark:bg-[#121f3d]">
      <Container >
        <ColumnLeft>
          <h1 className="dark:text-white">Calendario Ecosocialista Julio 2021</h1>
          <section>
                      <h2 className="text-2xl font-light mb-2 dark:text-white">
              <strong className="font-bold">03.-</strong>Día Mundial Sin Bolsas Plásticas            </h2>
            <h2 className="text-2xl font-light mb-2 dark:text-white">
              <strong className="font-bold">04.-</strong>Día de la Constitución Mundial Ambiente    </h2>
            <h2 className="text-2xl font-light mb-2 dark:text-white">
              <strong className="font-bold">07.-</strong>Día Internacional de la Conservación del Suelo
            </h2>
            <h2 className="text-2xl font-light mb-2 dark:text-white">
              <strong className="font-bold">11.-</strong>Día Mundial de la Población
            </h2>
            <h2 className="text-2xl font-light mb-2 dark:text-white">
              <strong className="font-bold">26.-</strong>Día Internacional para la Defensa del Manglar            </h2>
                   </section>

          <Button
            to="https://drive.google.com/file/d/1P1AHPSSehE5wY7XczNG5qIaKAk1N2u8H/view?usp=sharing"
            primary="true"
          >
            Descargar
          </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse} className="dark:bg-[#121f3d]">
          <StaticImage
            src="../../assets/calendario-img.png"
            alt="home"
            placeholder="tracedSVG"
            width={550}
          />
        </ColumnRight>
      </Container>
    </Section>
  )
}
export default InfoSection
