import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as Category from './Category'

describe("Category", () => {

})

it('should be initially deselected', async () => {

  const props: Category.Props = {
    category: "Amazing",
    selected: false,
    categorySelected: (c) => { },
    categoryDeselected: (c) => { }
  }

  await render(<Category.Category {...props} />)

  const button = screen.getByRole("button")

  expect(button.style.backgroundColor)
    .toBe("darkgrey")

  cleanup();    
})

it('should be initially selected', async () => {

  const props: Category.Props = {
    category: "Amazing",
    selected: true,
    categorySelected: (c) => { },
    categoryDeselected: (c) => { }
  }

  await render(<Category.Category {...props} />)

  const button = screen.getByRole("button")

  expect(button.style.backgroundColor)
    .toBe("darkgrey")

  cleanup();
})

it('should be selected on click', async () => {

  const category = "Amazing"

  let categorySelected: string = ""

  const props: Category.Props = {
    category: category,
    selected: false,
    categorySelected: (c) => { categorySelected = c },
    categoryDeselected: (c) => { }
  }

  render(<Category.Category {...props} />)

  const button = screen.getByRole("button")

  const event = userEvent.setup()
  await event.click(button)

  expect(categorySelected)
    .toBe(category)

  cleanup()
})

it('should be deselected on click', async () => {

  const category = "Amazing"

  let categoryDeselected: string = ""

  const props: Category.Props = {
    category: category,
    selected: true,
    categorySelected: (c) => { },
    categoryDeselected: (c) => { categoryDeselected = c }
  }

  await render(<Category.Category {...props} />)

  const button = screen.getByRole("button")

  const event = userEvent.setup()
  await event.click(button)

  expect(categoryDeselected)
    .toBe(category)

  cleanup()
})
