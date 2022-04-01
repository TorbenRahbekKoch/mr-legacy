import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as Category from './Category'

it('should be initially deselected', () => {

  const props: Category.Props = {
    category: "Amazing",
    selected: false,
    categorySelected: (c) => { },
    categoryDeselected: (c) => { }
  }

  render(<Category.Category {...props} />)

  const checkbox = screen.getByRole("checkbox")

  expect((checkbox as HTMLInputElement).checked)
    .toBeFalsy()
})

it('should be initially selected', () => {

  const props: Category.Props = {
    category: "Amazing",
    selected: true,
    categorySelected: (c) => { },
    categoryDeselected: (c) => { }
  }

  render(<Category.Category {...props} />)

  const checkbox = screen.getByRole("checkbox")

  expect((checkbox as HTMLInputElement).checked)
    .toBeTruthy()
})

it('should be selected on click', async () => {

  const category = "Amazing"

  let categorySelected : string = ""

  const props: Category.Props = {
    category: category,
    selected: false,
    categorySelected: (c) => { categorySelected = c },
    categoryDeselected: (c) => { }
  }

  render(<Category.Category {...props} />)

  const checkbox = screen.getByRole("checkbox")

  const event = userEvent.setup()
  await event.click(checkbox)

  expect(categorySelected)
    .toBe(category)
})

it('should be deselected on click', async () => {

  const category = "Amazing"

  let categoryDeselected : string = ""

  const props: Category.Props = {
    category: category,
    selected: true,
    categorySelected: (c) => {  },
    categoryDeselected: (c) => { categoryDeselected = c }
  }

  render(<Category.Category {...props} />)

  const checkbox = screen.getByRole("checkbox")

  const event = userEvent.setup()
  await event.click(checkbox)

  expect(categoryDeselected)
    .toBe(category)
})