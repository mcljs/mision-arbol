import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: { absolutePath: { regex: "/static/assets/img/guide/" } }
        ) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageSizes = image.node.childImageSharp.gatsbyImageData
      return (
       
          <GatsbyImage alt={props.alt} image={imageSizes} className="flex overflow-hidden block h-64 md:h-42 m-4 md:m-0 object-cover group-hover:shadow-lg group-focus:shadow-lg duration-200 transform group-hover:-translate-y-1 group-focus:-translate-y-1 object-contain"    objectFit="cover"
  objectPosition="50% 50%"/>
     
      )
    }}
  />
)

export default Image
