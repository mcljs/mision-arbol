/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"


function SEO({ description, lang, meta,image, title }) {

  useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  
  const imageUrl = `http://misionarbol.minec.gob.ve${image}`

  const ogImage = 
    image || 'http://misionarbol.minec.gob.ve/static/682c4dfb4d5442c930e62265fc36b09a/logo.jpeg'



  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `aplication-name`,
          content: 'Misión Arbol'
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:image:src`,
          content: ogImage
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]  .concat(
          image
            ? [
                {
                  name: `og:image`,
                  content: imageUrl,
                },
                {
                  name: `og:image:alt`,
                  content:  title,
                },
                {
                  name: `twitter:image`,
                  content: imageUrl,
                },
                {
                  name: `twitter:image:alt`,
                  content:  title,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}    />
  )
}

SEO.defaultProps = {
  lang: `es-ve`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
