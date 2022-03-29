import { EntryTitle, Props as EntryTitleProps } from './EntryTitle'
import { Article } from './Article'
import * as Style from './Style'

export interface Props {
  blogEntries: EntryTitleProps[]
  retrieveArticle: (url: string, articleReceived: (text: string) => void) => void
  location?: string;
}

export const defaultProps: Props = {
  blogEntries: [],
  retrieveArticle: (url: string, received: (text:string) => void) => {},
  location: undefined
}

export function Selector({...props}: Props) {
  if (props.location === "/blogs") // TODO: Hack
    return FilteredOverview({ blogEntries : props.blogEntries})
  else {
    const blogEntry = props.blogEntries.find(be => be.url === props.location)
    if (blogEntry == null)
      return null

    return (
      Article({url: blogEntry.url, retrieveArticle: props.retrieveArticle})
    )
  }
}

export interface OverviewProps {
  blogEntries: EntryTitleProps[]
}

export function FilteredOverview({ ...props}: OverviewProps) {
  const blogEntries = props.blogEntries    
    .filter(entry => {
      if (entry.date === undefined)
        return false
      else
        return entry.date.getDate() < Date.now()
    })

  const filteredProps: OverviewProps = {
    blogEntries: blogEntries
  } 
  return Overview(filteredProps)
}

export function Overview({...props}: OverviewProps) {
  const titles = props.blogEntries.map(entry => <EntryTitle {...entry} key={entry.url}/>)
  return (
    <Style.Overview>{titles}</Style.Overview>
  )
}