import * as React from 'react'

import Layout from '../components/layout'
import '../styles/mardown.css'

function MarkdownPage({children}) {
  return (
    <>
      <Layout>
        <div className="markdown prose prose-indigo md:prose-lg pb-8">{children}</div>

      </Layout>
    </>
  )
}

export default MarkdownPage
