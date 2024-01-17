import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { ArticleList } from '..'
import { FilteredArticleList, Props } from './FilteredArticleList'

describe('ArticleList', () => {

  afterEach(() => {
    cleanup()
  })

  it('Well...', () => {
    const blogEntries = { blogEntries: [] }
    render(<ArticleList {...blogEntries} />)
  })

  it('Unpublished entry does not show up', () => {
    const blogEntries: Props = {
      blogEntries: [
        { url: "", title: "Unpublished", teaser: "", dir: "", date: undefined, categories: [] }
      ],
      activeCategories: []
    }
    render(<FilteredArticleList {...blogEntries} />)
    expect(screen.queryByText(blogEntries.blogEntries[0].title))
      .toBeNull()
  })

  it('Published entry does show up', () => {
    const blogEntries: Props = {
      blogEntries: [
        { url: "", title: "Unpublished", teaser: "", dir: "", date: new Date(Date.now()), categories: [] }
      ],
      activeCategories: []
    }
    render(<FilteredArticleList {...blogEntries} />)
    expect(screen.queryByText(blogEntries.blogEntries[0].title))
      .toBeDefined()
  })

})

