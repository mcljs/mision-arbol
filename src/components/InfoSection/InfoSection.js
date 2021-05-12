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
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Calendario Ecosocialista Mayo 2021</h1>
          <section>
            <h2 className="text-2xl font-bold mb-2">
              <strong>01.-</strong>Día Internacional de los Trabajadores
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>04.-</strong>Día Internacional del Combatiente de
              Incendios Forestales
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>09.-</strong>Día Mundial de las Aves Migratorias
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>15.-</strong>Día Mundial de la Acción Climática
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>17.-</strong>Día Mundial del Reciclaje
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>22.-</strong>Día Internacional de la Diversidad Biológica
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>23.-</strong>Día Nacional del Turpial y de la Orquídea
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>29.-</strong>Declaración del Araguaney como Árbol Nacional
              de Venezuela
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>30.-</strong>Día Nacional del Árbol
            </h2>
            <h2 className="text-2xl font-bold mb-2">
              <strong>31.-</strong>Día Mundial Sin Tabaco
            </h2>
          </section>

          <Button
            to="https://drive.google.com/file/d/1P1AHPSSehE5wY7XczNG5qIaKAk1N2u8H/view?usp=sharing"
            primary="true"
          >
            Descargar
          </Button>
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
  )
}
export default InfoSection
