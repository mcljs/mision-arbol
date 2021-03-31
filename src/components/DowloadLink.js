import * as React from 'react'
import GatsbyLink from 'gatsby-link'

const DownloadLink = ({children, to , src, ...other}) => {
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <GatsbyLink to={src} {...other} download>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={src} {...other} download>
      {children}
    </a>
  )
}

export default DownloadLink
