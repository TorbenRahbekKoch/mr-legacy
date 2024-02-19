import ReactMarkDown from 'react-markdown'
import * as Style from './Style'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export interface Props {
  date?: Date
  article: string
}

export function Article({ article, date }: Props) {  
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric'}
  const dateFormatted = date?.toLocaleDateString(undefined, options)
  const published = "Published: " + (dateFormatted)
  
  return (
    <Style.BlogEntry>
    <span>{published}</span>
    <Style.Article className='article'>
      <ReactMarkDown className='article' rehypePlugins={[remarkGfm,rehypeHighlight]}>
        {article}
      </ReactMarkDown>
    </Style.Article>
    </Style.BlogEntry>
  )
}