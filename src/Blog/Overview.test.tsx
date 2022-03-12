import {render, screen} from '@testing-library/react'
import * as Blog from '.'

test('Well...', () => {
    const blogEntries = { blogEntries:  []}
    render(<Blog.Overview {...blogEntries}/>)
})

test('Unpublished entry does not show up', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: undefined, categories: []}
    ]

  }
  render(<Blog.FilteredOverview {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeNull()
})

test('Published entry does show up', () => {
  const blogEntries: Blog.Props = {
    blogEntries: [
      { url : "", title: "Unpublished", teaser: "", dir: "", date: new Date(Date.now()), categories: []}
    ]

  }
  render(<Blog.FilteredOverview {...blogEntries} />)
  expect(screen.queryByText(blogEntries.blogEntries[0].title))
    .toBeDefined()
})