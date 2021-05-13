import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/Seo"

import TagPill from "../components/TagPill"

const TagIndex = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query tagGroups {
       allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
      posts: nodes {
        frontmatter {
          title
          date(locale: "es-ve", formatString: "DD MMMM YYYY")
        }
        fields {
          slug
        }
        id
      }
    }
  }
}
    `
  )

  const tagGroups = allMarkdownRemark.group

  return (
    <Layout>
      <SEO title="Etiquetas Generales" />
<div className="mx-auto max-w-5xl px-6 md:px-0 flex-1 w-full md:w-5/6 pt-4 pb-16">
 <h2 className="text-3xl font-bold mb-6 mt-16 text-center dark:text-white">Etiquetas Generales</h2>
      <div className="mb-4 md:mb-6 lg:px-12 flex flex-wrap">
        {tagGroups.map((group) => (
          <div key={group.tag}>
            <TagPill
              tag={group.tag}
              customLabel={`${group.tag} (${group.totalCount})`}
            />
          </div>
        ))}
      </div>
      {tagGroups.map((group) => {
        const tagId = group.tag.replace(/ /g, ``)
        return (
          <div key={group.tag} id={tagId} className="mb-5">
            <h2 className="font-semibold text-xl dark:text-white">{group.tag}</h2>
            <div className="italic text-gray-500 text-sm">
              {group.totalCount} post{group.totalCount === 1 ? `` : `s`}
            </div>
            {group.posts.map((post) => (
              <div key={post.id} className="mb-1">
                <Link
                  to={post.fields.slug}
                  className="hover:text-accent-3 hover:text-green-700 dark:text-[#becde3]"              >
                  {post.frontmatter.title}
                  {` `}
                </Link>
                <span className="text-gray-500 text-sm">
                  {post.frontmatter.date}
                </span>
              </div>
            ))}
          </div>
        )
      })}
  </div>
    </Layout>
  )
}

export default TagIndex
