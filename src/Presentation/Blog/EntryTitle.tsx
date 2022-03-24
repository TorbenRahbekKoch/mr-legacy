import * as Style from './Style'

export interface Props {
  url: string
  title : string
  teaser: string
  // The directory, within blogs, which hold the article and images. Can be used to
  // store data in a directory which is different from the url. Probably not going to be used?
  dir: string 
  date?: Date
  categories: string[] 
}

export function EntryTitle(props: Props) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric'}
  
  return (
    <Style.BlogArticleLink href={props.url}>
      <Style.LinkTitle>{props.title}</Style.LinkTitle>
      <span>{props.date?.toLocaleDateString(undefined, options)}</span>
      <p>{props.teaser}</p>
    </Style.BlogArticleLink>
  )
}