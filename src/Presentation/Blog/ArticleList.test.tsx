import {render, screen} from '@testing-library/react'
import * as Blog from '.'
import { FilteredArticleList, Props } from './FilteredArticleList'
import { Controller, Props as ControllerProps } from './Controller'


const  articleText = "Article without much text"

function retrieveArticle(url: string, articleReceived: (text: string) => void) {
  articleReceived(articleText)
}

test('Well...', () => {
    const blogEntries = { blogEntries:  []}
    render(<Blog.ArticleList {...blogEntries}/>)
})

test('Unpublished entry does not show up', () => {
  const blogEntries: Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: undefined, categories: []}
    ],
    activeCategories: []
  }
  render(<FilteredArticleList {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeNull()
})

test('Published entry does show up', () => {
  const blogEntries: Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: new Date(Date.now()), categories: []}
    ],
    activeCategories: []
  }
  render(<FilteredArticleList {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeDefined()
})

it('should show article list when no path is given', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url: "/blogs/article", title: "Unique Article", teaser: "Teaser", dir: "", date: undefined, categories: []}
    ],
    retrieveArticle: retrieveArticle
  }

  render(<Controller {...blogEntries} />)
  expect(screen.queryByText("Unique Article"))
    .toBeDefined()
})

it('should show article when path is given', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url: "/blogs/article", title: "Article", teaser: "", dir: "", date: undefined, categories: []}
    ],
    retrieveArticle: retrieveArticle
  }

  render(<Controller {...blogEntries} />)
  expect(screen.queryByText(articleText))
    .toBeDefined()
})