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
      <Container>
        <ColumnLeft>
          <h1 className="dark:text-white">
            Calendario Ecosocialista Febrero 2022
          </h1>
          <section>
            <h2 className="text-2xl font-light mb-3 dark:text-white">
              <strong className="font-bold">02.-</strong>Día Mundial de los Humedades{" "}
            </h2>
            <h2 className="text-2xl font-light mb-3 dark:text-white">
              <strong className="font-bold">13.-</strong>Día Nacional de los Guardaparques
            </h2>
            <h2 className="text-2xl font-light mb-3 dark:text-white">
              <strong className="font-bold">14.-</strong>Día de la Energia{" "}
            </h2>

            <h2 className="text-2xl font-light mb-3 dark:text-white">
              <strong className="font-bold">21.-</strong>Día Internacional para la Proteccion de los Osos
            </h2>
            <h2 className="text-2xl font-light mb-3 dark:text-white">
              <strong className="font-bold">23.-</strong>Día del Compromiso Internacional del Control de Mercurio
            </h2>
          </section>

          <Button
            to="https://drive.google.com/file/d/19cog2N9LxE93-sD85pPV8EakNNZLCmia/view?usp=sharing"
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
