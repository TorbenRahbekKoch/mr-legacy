import {render, screen} from '@testing-library/react'
import * as Blog from '.'

const  articleText = "Article without much text"

function retrieveArticle(url: string, articleReceived: (text: string) => void) {
  articleReceived(articleText)
}

test('Well...', () => {
    const blogEntries = { blogEntries:  []}
    render(<Blog.Overview {...blogEntries}/>)
})

test('Unpublished entry does not show up', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: undefined, categories: []}
    ],
    retrieveArticle: retrieveArticle

  }
  render(<Blog.FilteredOverview {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeNull()
})

test('Published entry does show up', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: new Date(Date.now()), categories: []}
    ],
    retrieveArticle: retrieveArticle
  }
  render(<Blog.FilteredOverview {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeDefined()
})

it('should show article when path is given', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url: "/blogs/article", title: "Article", teaser: "", dir: "", date: undefined, categories: []}
    ],
    retrieveArticle: retrieveArticle
  }

  render(<Blog.Selector {...blogEntries} />)
  expect(screen.queryByText(articleText))
    .toBeDefined()
})