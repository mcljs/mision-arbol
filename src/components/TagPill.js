import React from "react"
import PropTypes from "prop-types"
import Link  from "./link"

const propTypes = {
  tag: PropTypes.string.isRequired,
}

const TagPill = ({ tag, customLabel }) => {
  const label = customLabel || `#${tag}`
  const tagId = tag.replace(/ /g, ``)

  return (
    <Link to={`/tags/#${tagId}`} rel="tag">
      <span className="dark:text-white inline-block rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mx-1 my-1 border-accent-5 border hover:bg-accent-3 hover:text-green-800 hover:border-accent-3">
        {label}
      </span>
    </Link>
  )
}

TagPill.propTypes = propTypes

export default TagPill
