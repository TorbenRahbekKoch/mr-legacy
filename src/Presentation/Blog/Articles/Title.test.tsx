import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title', () => {
  
  it('should render the url', () => {
    const blogEntry = {
      url: "/blogs/once-upon-a-time-in-the-computer",
      title: "Once upon a time in the computer",
      teaser: "At the turn of the century a mystical machine materialized",
      dir: "once-upon-a-time",
      date: new Date(2022, 3, 27),
      categories: ["story time"]
    }

    render(<Title {...blogEntry} />)
    expect(screen.getByRole('link'))
      .toHaveAttribute('href', blogEntry.url)
  })
})
