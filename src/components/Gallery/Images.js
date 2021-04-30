import React from "react"
import './style.css'
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image";

export const Image = () => {
 


 const data = useStaticQuery(graphql`
  query {
    allFile(filter:{absolutePath: {regex: "/static/assets/img/gallery/"}} ) 
    {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(height:600,width:600)
          }
        }
      }
    }
  }
  ` )

  return ( 
  <div className="image-container">
        <h1 className="text-center  font-bold  text-4xl xl:text-5xl">Galería</h1>
        <div className="image-grid">
            {data.allFile.edges.map((image,key) =>(
                <GatsbyImage key={key}
                className="image-item"
                image={image.node.childImageSharp.gatsbyImageData}
                alt={image.node.base.split('.'[0])}
                />
            ))} 

        </div>

    </div>
  );
}
