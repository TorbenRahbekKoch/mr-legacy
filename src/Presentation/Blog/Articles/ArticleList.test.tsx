import {render, screen} from '@testing-library/react'
import { ArticleList } from '..'
import { FilteredArticleList, Props } from './FilteredArticleList'

test('Well...', () => {
    const blogEntries = { blogEntries:  []}
    render(<ArticleList {...blogEntries}/>)
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
