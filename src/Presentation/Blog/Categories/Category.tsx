import { useState } from 'react';
import * as Style from './Style';

export interface Props {
  category: string
  selected: boolean
  categorySelected: (category: string) => void
  categoryDeselected: (category: string) => void
}

export function Category({ category, ...props }: Props) {
  const [selected, setSelected] = useState(false)

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (selected) {
      props.categoryDeselected(category)
      setSelected(false)
    }
    else {
      props.categorySelected(category)
      setSelected(true)
    }
  }

  const categoryStyleProps = {
    selected: selected
  } 
  return (
    <Style.Category {...categoryStyleProps}>
      <button type="button" onClick={(e) => onClick(e)} id={category}>
        <label htmlFor={category}>{category}</label>
      </button>
    </Style.Category>
  );
}
