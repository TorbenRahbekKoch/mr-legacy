import ReactMarkDown from 'react-markdown'
import * as Style from './Style'
import remarkGfm from 'remark-gfm'

export interface Props {
  date?: Date
  article: string
}

export function Article({ article, date }: Props) {  
  const published = "Published: " + (date != null ? `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}` : "")
  return (
    <Style.BlogEntry>
    <span>{published}</span>
    <Style.Article className='article'>
      <ReactMarkDown className='article' rehypePlugins={[remarkGfm]}>
        {article}
      </ReactMarkDown>
    </Style.Article>
    </Style.BlogEntry>
  )
}