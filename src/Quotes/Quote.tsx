export interface Props {
  quotes: string[]
}

export const defaultProps = {
  quotes: ["Det ville jo være smart, så det kan man ikke"]
}

export function Quote({ ...props }: Props) {
  if (props?.quotes == null)
    return null
    
  return (
    <span>{props.quotes[0]}</span>
  )
}