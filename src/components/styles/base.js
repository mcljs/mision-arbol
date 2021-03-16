import styled from 'styled-components'
import media from 'styled-media-query'

export const PostHeader = styled.header`
font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  color: var(--postColor);
  margin: auto;
  max-width: 70rem;
  padding: 5rem 5rem 0;
  ${media.lessThan('large')`
    padding: 3rem 0 0;
    max-width: 100%;
  `}
`

export const PostTitle = styled.h1`
font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 4rem;
  color: black;
  font-weight: 700;
  padding: 0 1.4rem;
  margin: 1rem auto;
  ${media.lessThan('large')`
    font-size: 2.8rem;
    line-height: 1.1;
    padding: 0 1rem;
  `}
`

export const PostDescription = styled.h2`
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 2rem;
  font-weight: 200;
  padding: 0 1.4rem;
  ${media.lessThan('large')`
    font-size: 1.6rem;
    line-height: 1.3;
    padding: 0 1rem;
  `}
`

export const PostDate = styled.p`
font-family: Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  font-size: 1.1rem;
  font-weight: 200;
  padding: 0 1.4rem;
  ${media.lessThan('large')`
    padding: 0 1rem;
  `}
`

export const MainContent = styled.section`

  img {
    display: block;
    width: auto;
    max-width: 100%;
    margin: 1.875rem auto;
  }
   .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    ${media.lessThan('large')`
      padding: 0;
    `}
  }

  `
