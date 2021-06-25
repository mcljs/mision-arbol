import React from "react"
import './style.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

export const Image = () => {
 


 const data = useStaticQuery(graphql`
  query {
    allFile(filter:{absolutePath: {regex: "/static/assets/img/gallery/"}} ) 
    {
      edges {
        node {
          base
         childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }        
        }
      }
    }
  }
  ` )

  return ( 
  <div className="image-container dark:bg-[#121f3d]">
      
        <div className="image-grid">
            {data.allFile.edges.map((image,key) =>(
                <Img key={key}
                className="image-item"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.'[0])}          
              />
            ))} 

        </div>

    </div>
  );
}
