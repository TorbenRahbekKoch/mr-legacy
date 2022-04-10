import { Category } from './Category'
import * as Style from './Style'

export type SelectionChanged = (categories: string[]) => void

export interface Props {
  allCategories: string[]
  selectedCategories: string[]
  selectionChanged: SelectionChanged
}


function isSelected(category: string, selectedCategories: string[]) {
  return selectedCategories.some(
    c => c === category
  )
}

export function CategoryList({ allCategories, selectedCategories, ...props }: Props) {

  function categorySelected(category: string) {
    const newSelection = [...selectedCategories, category]
    props.selectionChanged(newSelection)
  }

  function categoryDeselected(category: string) {
    const newSelection = selectedCategories
      .filter(c => c !== category);
    props.selectionChanged(newSelection)
  }

  return (<>
    <Style.CategoryList>
      <h2>Categories</h2>
      <ul>
        {
          allCategories.map(
            c => <Category 
            key={c}
            category={c}
            selected={isSelected(c, selectedCategories)} 
            categoryDeselected={categoryDeselected} 
            categorySelected={categorySelected}/>)
        }
      </ul>
    </Style.CategoryList>
  </>
  )
}