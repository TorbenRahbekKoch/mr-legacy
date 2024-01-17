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
    selected: props.selected,
    onClick: onClick,
    id: category
  } 
  
  return (
    <Style.Category {...categoryStyleProps}>
        <span>{category}</span>
    </Style.Category>
  );
}
