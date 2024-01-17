import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogController, Props  } from './Blog.controller'

const  articleText = "Article without much text"

function retrieveArticle(_url: string, articleReceived: (text: string) => void) {
  articleReceived(articleText)
}

describe("BlogController", () => {
  it('should show article list when no path is given', () => {

    const retrieveBlogEntries = () => [
      { url: "/blogs/article", title: "Unique Article", teaser: "Teaser", dir: "", date: undefined, categories: []}
    ]
  
    const repository = {
      getAllBlogEntries: retrieveBlogEntries,
      getArticle: retrieveArticle
    }
  
    const props: Props = {
      repository : repository,
      location : "/blogs"
    }
    render(<BlogController {...props} />)
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
  
    const props: Props = {
      repository : repository,
      location : "/blogs/article"
    }
  
    render(<BlogController {...props} />)
    expect(screen.queryByText(articleText))
      .toBeDefined()
  })
})

