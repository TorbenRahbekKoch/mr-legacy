export interface Props {
  greeting: string
  username: string
}

export const defaultProps: Props = {
  greeting: "Hello again",
  username: "Unknown user"
}

export function User({ ...props }: Props) {
  return (
    <span>{props.greeting} {props.username}</span>
  )
} 