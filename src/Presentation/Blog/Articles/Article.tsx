import ReactMarkDown from 'react-markdown'
import * as Style from './Style'
import rehypeHighlight from 'rehype-highlight'

export interface Props {
  date?: Date
  article: string
}

export function Article({ article, date }: Props) {

  return (
    <Style.Article className='article'>
      <ReactMarkDown className='article' rehypePlugins={[rehypeHighlight]}>
        {article}
      </ReactMarkDown>
    </Style.Article>
  )
}