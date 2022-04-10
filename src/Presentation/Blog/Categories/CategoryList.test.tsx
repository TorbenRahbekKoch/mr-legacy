import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as CategoryList from './CategoryList'

it('should append to empty selection on select', async () => {

  let selection: string[] = []

  function selectionChanged(newSelection: string[]) {
    selection = newSelection
  }

  const props: CategoryList.Props = {
    allCategories: ["Category 1", "Category 2", "Category 3"],
    selectedCategories:[],
    selectionChanged: selectionChanged
  }

  render(<CategoryList.CategoryList {...props}/>)

  const event = userEvent.setup()
  const checkbox = screen.getByLabelText("Category 1")

  await event.click(checkbox)

  expect(selection)
    .toContain("Category 1")
})

it('should append to not-empty selection on select', async () => {

  let selection: string[] = []

  function selectionChanged(newSelection: string[]) {
    selection = newSelection
  }

  const props: CategoryList.Props = {
    allCategories: ["Category 1", "Category 2", "Category 3"],
    selectedCategories:["Category 2"],
    selectionChanged: selectionChanged
  }

  render(<CategoryList.CategoryList {...props}/>)

  const event = userEvent.setup()
  const checkbox = screen.getByLabelText("Category 1")

  await event.click(checkbox)

  expect(selection)
    .toContain("Category 1")
    expect(selection)
    .toContain("Category 2")
})