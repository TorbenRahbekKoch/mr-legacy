import * as Style from './Style';

export interface Props {
  category: string
  selected: boolean
  categorySelected: (category: string) => void
  categoryDeselected: (category: string) => void
}

export function Category({ category, ...props }: Props) {

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (props.selected) {
      props.categoryDeselected(category)     
    }
    else {
      props.categorySelected(category)
    }
  }

  const categoryStyleProps = {
    selected: props.selected
  } 
  
  return (
    <Style.Category {...categoryStyleProps}>
      <button type="button" onClick={(e) => onClick(e)} id={category}>
        <label htmlFor={category}>{category}</label>
      </button>
    </Style.Category>
  );
}
