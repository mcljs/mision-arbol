import * as React from 'react'

import Layout from '../components/layout'

import * as S from '../components/styles/base'

function MarkdownPage({children}) {
  return (
    <>
      <Layout >
      <div className="pb-8">
        <div className="markdown pt-8 dark:text-white">
 <S.MainContent> 
        {children}
  </S.MainContent>
  </div>
  </div>
      </Layout>
    </>
  )
}

export default MarkdownPage
