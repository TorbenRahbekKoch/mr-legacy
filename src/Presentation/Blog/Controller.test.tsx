import { render, screen } from '@testing-library/react'
import * as Blog from '.'

const  articleText = "Article without much text"

function retrieveArticle(url: string, articleReceived: (text: string) => void) {
  articleReceived(articleText)
}

it('should show article list when no path is given', () => {

  const retrieveBlogEntries = () => [
    { url: "/blogs/article", title: "Unique Article", teaser: "Teaser", dir: "", date: undefined, categories: []}
  ]

  const repository = {
    getAllBlogEntries: retrieveBlogEntries,
    getArticle: retrieveArticle
  }

  const props: Blog.Props = {
    repository : repository,
    location : "/blogs"
  }
  render(<Blog.Controller {...props} />)
  expect(screen.queryByText("Unique Article"))
    .toBeDefined()
})

it('should show article when path is given', () => {

  const retrieveBlogEntries = () => [
    { url: "/blogs/article", title: "Article", teaser: "", dir: "", date: undefined, categories: []}
  ]
  
  const repository = {
    getAllBlogEntries: retrieveBlogEntries,
    getArticle: retrieveArticle
  }

  const props: Blog.Props = {
    repository : repository,
    location : "/blogs/article"
  }

  render(<Blog.Controller {...props} />)
  expect(screen.queryByText(articleText))
    .toBeDefined()
})