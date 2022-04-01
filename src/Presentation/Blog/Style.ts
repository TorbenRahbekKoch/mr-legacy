import styled from 'styled-components'

export const ArticleList = styled.div`
  margin-top: 20px;
  text-align: left;
  width: 80%;
  display:inline-block
`
export const Article = styled.article`
  .article {
    margin-top: 20px;
    margin-left: 5%;
    text-align: left;
    width: 95%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;

    @media screen and (max-width: 600px) {
      font-size: 1.1em;
      margin-left: 0%;
      width: 90%;
  };

  h1, h2, h3, h5, h6 {
    margin-left: -5%;
    font-family: 'Courier New', Courier, monospace;
    word-wrap: break-word;

    @media screen and (max-width:600px) {
      margin-left: 0%;
      font-size: 1.1em;
    }
  };

  h1, h2, h3, ul, pre, p {
    text-align: left;
  };

  p, pre {
    width: 80%;

    @media screen and (max-width: 600px) {
      width: 100%;
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