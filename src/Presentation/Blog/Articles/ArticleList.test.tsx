import { render, screen  } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FilteredArticleList, Props } from './FilteredArticleList'

describe('ArticleList', () => {

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

