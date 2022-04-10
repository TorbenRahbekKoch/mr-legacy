import { useEffect, useState } from "react";
import * as Composer  from "./Composer"
import { Props as EntryTitleProps } from './Articles/Title'
import { Repository } from "./Repository";

export interface Props {
  location?: string;  
  repository: Repository  
}

export const defaultProps: Props = {
  location: undefined,
  repository : {
    getAllBlogEntries: (entries) => {},
    getArticle: (url, article) => {}
  }
}

// It could be interesting to convert the controller to a hook
// that is then used by Composer
export function Controller({...props}: Props) {
  const [article, setArticle] = useState("")
  const [blogEntries, setBlogEntries] = useState<EntryTitleProps[]>([])
  const [categorySelection, setCategorySelection] = useState<string[]>([])
  
  useEffect(() => {
    props.repository.getAllBlogEntries(blogEntries => {
      setBlogEntries(blogEntries)
    })

    if (props.location !== "/blogs") {
      const path = window.location.pathname
      const lastSlashPos = path.lastIndexOf('/')
      const articleUrl = path.substring(lastSlashPos + 1)
  
      props.repository.getArticle(articleUrl, article => {
        setArticle(article)
      })
    }
  },[props.location, props.repository])

  // TODO: Fix this url check hack, somehow... 
  if (props.location === "/blogs") { 

    const categories = blogEntries
      .flatMap(be => be.categories)

    const allCategories = Array.from(new Set(categories))

    const composerProps: Composer.ArticleListProps = {
      kind: Composer.PropType.ArticleList,
      allCategories: allCategories,
      selectedCategories: categorySelection,
      blogEntries: blogEntries,
      selectionChanged: setCategorySelection
    }
    return <Composer.Composer {...composerProps}/>
  }
  else {

    const currentBlogEntry = blogEntries
      .find(be => be.url === props.location)

    if (currentBlogEntry == null)
      return null;

    const composerProps: Composer.ArticleProps = {
      kind: Composer.PropType.Article,
      date: currentBlogEntry.date,
      article: article
    }

    return <Composer.Composer {...composerProps }/>
  }
}