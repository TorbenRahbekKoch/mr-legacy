import styled from 'styled-components'

export const Overview = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 80%;
`
export const Article = styled.article`
  .article {
    margin-left: inherit;
    margin-top: 20px;
    text-align: left;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    @media screen and (max-width: 600px) {
    font-size: 1.1em;
  };
  h1, h2, h3 {
    font-family: 'Courier New', Courier, monospace;
  };
  h1, h2, h3, ul, pre {
    margin-left: 10%;
    text-align: left;
  };
  p, pre {
    margin-left: 10%;
    width: 80%;
    @media screen and (min-width: 100px) {
      width: 70%;
    }
  };
  pre {
    padding-left: 20px;
  }
}`


export const BlogArticleLink = styled.a`
  text-decoration: none;
  :link {
    text-decoration: none;
  }
`
export const LinkTitle = styled.span`
  font-size: 2em;
  display: block;
`