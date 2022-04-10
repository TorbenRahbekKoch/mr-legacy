import { Title, Props as EntryTitleProps } from './Title'
import * as Style from './Style'

export const defaultProps = {
  blogEntries: []
}

export interface Props {
  blogEntries: EntryTitleProps[]
}

export function ArticleList({...props}: Props) {
  const titles = props.blogEntries
    .map(entry => <Title {...entry} key={entry.url}/>)
    
  return (
    <Style.ArticleList>{titles}</Style.ArticleList>
  )
}