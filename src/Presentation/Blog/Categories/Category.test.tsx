import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import * as Category from './Category'


describe("Category", () => {
  
  it('should be initially deselected', async () => {

    const props: Category.Props = {
      category: "Amazing",
      selected: false,
      categorySelected: (_) => { },
      categoryDeselected: (_) => { }
    }
  
    await render(<Category.Category {...props} />)
  
    const button = await screen.getByRole("button")
  
    expect(button)
      .toHaveStyle('background-color: ButtonFace')  
  })  

  it('should be initially selected', async () => {

    const props: Category.Props = {
      category: "Amazing",
      selected: true,
      categorySelected: (_) => { },
      categoryDeselected: (_) => { }
    }
  
    await render(<Category.Category {...props} />)
  
    const button = await screen.getByRole("button")
  
    expect(button)
      .toHaveStyle('background-color: rgb(169, 169, 169)')
  })

  it('should be selected on click', async () => {

    const category = "Amazing"
  
    let categorySelected: string = ""
  
    const props: Category.Props = {
      category: category,
      selected: false,
      categorySelected: (c) => { categorySelected = c },
      categoryDeselected: (_) => { }
    }
  
    render(<Category.Category {...props} />)
  
    const button = screen.getByRole("button")
  
    const event = userEvent.setup()
    await event.click(button)
  
    expect(categorySelected)
      .toBe(category)
  })
  
  it('should be deselected on click', async () => {
  
    const category = "Amazing"
  
    let categoryDeselected: string = ""
  
    const props: Category.Props = {
      category: category,
      selected: true,
      categorySelected: (_) => { },
      categoryDeselected: (c) => { categoryDeselected = c }
    }
  
    await render(<Category.Category {...props} />)
  
    const button = screen.getByRole("button")
  
    const event = userEvent.setup()
    await event.click(button)
  
    expect(categoryDeselected)
      .toBe(category)
  })  
})
