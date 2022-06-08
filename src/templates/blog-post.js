import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/Seo'
import * as S from '../components/styles/base'
import RecommendedPosts from "../components/RecommendedPosts"
import Share from '../components/Share'
import '../components/styles/base.css'
import TagPill from '../components/TagPill'
 const BlogPost = ({ data,pageContext,title,twitterHandle}) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost
  const tags= post.frontmatter.tags || []


     return (
      <Layout>
      <div className="dark:bg-[#121f3d] pt-8 pb-4">
      <SEO title={post.frontmatter.title}
        description={post.frontmatter.description}
        //image={post.frontmatter.image}
        image={`${post.frontmatter.image?.publicURL || post.frontmatter.imageUrl}`}
        />

        <div className="mt-10 sm:mt-24 ">
          <p className="px-4 lg:px-2 mb-5 italic text-gray-500 max-w-screen-md mx-auto text-lg leading-relaxed dark:text-[#becde3] 

">
          {post.frontmatter.date} 
        </p>
       
        <h1 className="post-title dark:text-white">{post.frontmatter.title}</h1>
      </div>
      <div className="markdown dark:text-white">
        <S.MainContent> 
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
       </S.MainContent>
        <section className="mt-4">
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </section>
      </div>
 
<img src="https://res.cloudinary.com/dk5bvgq20/image/upload/v1616366412/assets/Eslogan_de_Misi%C3%B3n_%C3%81rbol_PNG_jcegjs.png" alt="Eslogan" className="mx-auto pt-7 w-24"/ >

 <Share
          url={`http://misionarbol.minec.gob.ve${post.fields.slug}`}
title={title}
      twitterHandle={twitterHandle}
        />
      <RecommendedPosts next={next} previous={previous} />
      </div>
         </Layout>
     )
 }





export const query = graphql`
query Post($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    fields {
      slug
    }
    frontmatter {
      title
      tags
      description
      date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY")
      imageUrl
      image {
       publicURL
     }
    }
    html
    timeToRead
  }
}

`

 export default BlogPost
