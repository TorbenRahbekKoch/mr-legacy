import { useState } from "react";
import * as Composer  from "./Composer"
import { Props as EntryTitleProps } from './EntryTitle'


export interface Props {
  blogEntries: EntryTitleProps[]
  retrieveArticle: (url: string, articleReceived: (text: string) => void) => void
  location?: string;
  /*
  blogRepository: BlogRepository
  */
}

export const defaultProps: Props = {
  blogEntries: [],
  retrieveArticle: (url: string, articleReceived) => "",
  location: undefined,
}

// It could be interesting to make the controller a hook
// that is used by  Composer
export function Controller({...props}: Props) {
  const [article, setArticle] = useState("")
  const [isFetching, setIsFetching] = useState(false)
  const [selection, setSelection] = useState<string[]>([])

  if (props.location === "/blogs") { // TODO: Fix this url check hack, somehow... 

    const categories = props
      .blogEntries.flatMap(be => be.categories)

    const allCategories = Array.from(new Set(categories))

    const composerProps: Composer.ArticleListProps = {
      kind: Composer.PropType.ArticleList,
      allCategories: allCategories,
      selectedCategories: selection,
      blogEntries: props.blogEntries,
      selectionChanged: setSelection
    }
    return <Composer.Composer {...composerProps}/>
  }
  else {
    if (!isFetching) {
      const path = window.location.pathname
      const lastSlashPos = path.lastIndexOf('/')
      const articleUrl = path.substring(lastSlashPos + 1)
  
      setIsFetching(true)
      props.retrieveArticle(articleUrl, article => setArticle(article))
      return null;
    }

    const actualBlogEntry = props
      .blogEntries
      .find(be => be.url === props.location)

    if (actualBlogEntry == null)
      return null;

    const composerProps: Composer.ArticleProps = {
      kind: Composer.PropType.Article,
      date: actualBlogEntry.date,
      article: article
    }

    return <Composer.Composer {...composerProps }/>
  }
}