import * as Style from './Style';

export interface Props {
  category: string
  selected: boolean
  categorySelected: (category: string) => void
  categoryDeselected: (category: string) => void
}

export function Category({ category, ...props }: Props) {

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      props.categorySelected(category)
    }
    else {
      props.categoryDeselected(category)
    }
  }

  return (
    <Style.Category>
      <input type="checkbox" checked={props.selected} onChange={(e) => onChange(e)} id={category} />
      <label htmlFor={category}>{category}</label>
    </Style.Category>
  );
}
