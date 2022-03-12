import { EntryTitle, Props as EntryTitleProps } from './EntryTitle'
import * as Style from './Style'

export interface Props {
  blogEntries: EntryTitleProps[]
}

export const defaultProps = {
  blogEntries: []
}

export function FilteredOverview({ ...props}: Props) {
  const blogEntries = props.blogEntries    
    .filter(entry => {
      if (entry.date === undefined)
        return false
      else
        return entry.date.getDate() < Date.now()
    })

  const filteredProps: Props = {
    blogEntries: blogEntries
  } 
  return Overview(filteredProps)
}

export function Overview({...props}: Props) {
  const titles = props.blogEntries.map(entry => <EntryTitle {...entry} key={entry.url}/>)
  return (
    <Style.Overview>{titles}</Style.Overview>
  )
}