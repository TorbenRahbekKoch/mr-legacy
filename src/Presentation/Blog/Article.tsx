import ReactMarkDown from 'react-markdown'
import * as Style from './Style'

export interface Props {
  date?: Date
  article: string
}

export function Article({ article, date }: Props) {
  // const [article, setArticle] = useState("")
  // const [isFetching, setIsFetching] = useState(false)

  // if (!isFetching) {
  //   const path = window.location.pathname
  //   const lastSlashPos = path.lastIndexOf('/')
  //   const articleUrl = path.substring(lastSlashPos + 1)

  //   setIsFetching(true)
  //   props.retrieveArticle(articleUrl, article => setArticle(article))
  //   return null;
  // }

  return (
    <Style.Article className='article'>
      <ReactMarkDown className='article'>
        {article}
      </ReactMarkDown>
    </Style.Article>
  )
}