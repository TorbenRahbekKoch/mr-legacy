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

  h1, h2, h3, h4, h5, h6 {
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


  h1 {
    font-size: 1.4em;
  }

  h2 {
    font-size: 1.1em;
  }

  h3 {
    font-size: 1.0em;
  }

  h4 {
    font-size: 0.9em;
  }

  h5 {
    font-size: 0.8em;
  }

  h6 {
    font-size: 0.7em;
  }  

  blockquote {
    font-family:Open Sans;
    font-style:italic;
    font-size: 1.2em;
    width: 80%;
    line-height: 1.2;
    padding-top:1px;
    padding-bottom:1px;
    padding-left: 15px;
    margin-right: auto;
    border-left:8px solid #5050AB;
    background:#ededed;
  }

  p, pre {
    width: 80%;

    @media screen and (max-width: 600px) {
      width: 100%;
    }
  };

  pre {    
    white-space: pre-wrap;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #e3e3e3;
  }  

  code {
    color: red;
  }

  pre > code {
    color: unset;
  }

  .hljs-keyword {
    color: blue;
  }

  .hljs-attr {
    color: red;
  }

  .hljs-tag {
    color: blue;
  }

  .hljs-string {
    color: brown;
  }

  .hljs-variable {
    color: lightskyblue;
  }

  .hljs-number {
    color: green;
    font-weight: bold;
  }

  .hljs-literal {
    color: red;
  }

  .hljs-title {
    color: grey;
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

export const BlogEntry = styled.div`
  text-align: left;
`;