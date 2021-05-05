import { useStaticQuery, graphql } from "gatsby"

const useInstagram = () => {
/*  const data = useStaticQuery(graphql`
    {
      instagram: allInstagramContent(
        sort: { fields: timestamp, order: DESC }
        limit: 3
      ) {
        nodes {
          caption
          id
          timestamp(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
          localImage {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return data.instagram.nodes
  */
  /*
 const data = useStaticQuery(graphql`
    {
      instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
        nodes {
          caption
          id
          timestamp
          likes
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.instagram.nodes*/
}

export default useInstagram
