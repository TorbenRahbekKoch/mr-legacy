import ReactMarkDown from 'react-markdown'
import * as Style from './Style.ts'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export interface Props {
  pageContent: string
}

export function InfoPageComposer({ pageContent }: Props) {  
  
  return (
    <Style.InfoPage className='info-page'>
      <ReactMarkDown className='info-page' rehypePlugins={[remarkGfm,rehypeHighlight]}>
        {pageContent}
      </ReactMarkDown>
    </Style.InfoPage>
  )
}