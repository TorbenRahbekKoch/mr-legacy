import styled from 'styled-components'

export const Overview = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 80%;
`
export const Article = styled.article`
  .article {
    margin-top: 20px;
    margin-left: 5%;
    width: 80%;
    text-align: left;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    @media screen and (max-width: 600px) {
      font-size: 1.1em;
  };
  h1, h2, h3, h5, h6 {
    margin-left: -5%;
    font-family: 'Courier New', Courier, monospace;
    word-wrap: break-word;
    @media screen and (max-width:600px) {
      font-size: 1.2em;
    }
  };
  h1, h2, h3, ul, pre, p {
    text-align: left;
  };
  p, pre {
    width: 80%;
    @media screen and (max-width: 100px) {
      width: 70%;
    }
  };
  pre {    
    white-space: pre-wrap;
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

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`