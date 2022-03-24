import { useState } from 'react'
import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface Props {
  url: string
  retrieveArticle: (url: string, articleReceived: (text: string) => void) => void
}

export function Article({ ...props }: Props) {
  const [article, setArticle] = useState("")
  const [isFetching, setIsFetching] = useState(false)

  if (!isFetching) {
    const path = window.location.pathname
    const lastSlashPos = path.lastIndexOf('/')
    const articleUrl = path.substring(lastSlashPos + 1)

    setIsFetching(true)
    props.retrieveArticle(articleUrl, article => setArticle(article))
    return null;
  }

  return (
    <Style.Article className='article'>
      <ReactMarkDown className='article'>
        {article}
      </ReactMarkDown>
    </Style.Article>
  )
}