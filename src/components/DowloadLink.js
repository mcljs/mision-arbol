import * as React from 'react'
import GatsbyLink from 'gatsby-link'

const DownloadLink = ({children, src, }) => {
  const internal = /^\/(?!\/)/.test(src)

  if (internal) {
    return (
      <GatsbyLink to={src} download>
        {children}
      </GatsbyLink>
    )
  }

  return (
    <a href={src} download>
      {children}
    </a>
  )
}

export default DownloadLink
