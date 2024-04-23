import { useEffect, useState } from "react";
import * as Composer  from "./Blog.composer"
import { Props as EntryTitleProps } from './Articles/Title'
import { Repository } from "./Repository";
import { NotFound } from "../NotFound/NotFound.controller";

export interface Props {
  location?: string;  
  repository: Repository  
}

export const defaultProps: Props = {
  location: undefined,
  repository : {
    getAllBlogEntries: (_) => {},
    getArticle: (_, __) => {}
  }
}

// It could be interesting to convert the controller to a hook
// that is then used by BlogComposer
export function BlogController({...props}: Props) {
  const [article, setArticle] = useState("")
  const [blogEntries, setBlogEntries] = useState<EntryTitleProps[]>([])
  const [ready, setReady] = useState(false)
  const [categorySelection, setCategorySelection] = useState<string[]>([])

  useEffect(() => {
    props.repository.getAllBlogEntries(blogEntries => {
      setBlogEntries(blogEntries)
      setReady(true)
    })

    if (props.location !== "/blogs") {
      const path = window.location.pathname
      const lastSlashPos = path.lastIndexOf('/')
      const articleUrl = path.substring(lastSlashPos + 1)
  
      props.repository.getArticle(articleUrl, article => {
        setArticle(article)
      })
    }
  },[props.location, props.repository, ready])

  if (!ready) {
    return null
  }

  // TODO: Fix this url check hack, somehow... 
  if (props.location === "/blogs") { 

    const categories = blogEntries
      .flatMap(be => be.categories)

    const allCategories = Array.from(new Set(categories)).sort()

    const sortedBlogEntries = blogEntries
      .sort((blogEntry1, blogEntry2) => 
          {
            if (blogEntry1?.date == null)
              return 1
            if (blogEntry2?.date == null)  
              return -1
            return blogEntry1?.date < blogEntry2?.date
            ? 1
            : -1})
    const composerProps: Composer.ArticleListProps = {
      kind: Composer.PropType.ArticleList,
      allCategories: allCategories,
      selectedCategories: categorySelection,
      blogEntries: sortedBlogEntries,
      selectionChanged: setCategorySelection
    }
    return <Composer.BlogComposer {...composerProps}/>
  }
  else {

    const currentBlogEntry = blogEntries
      .find(be => be.url === props.location)

    if (currentBlogEntry == null)
      return <NotFound/>      

    const composerProps: Composer.ArticleProps = {
      kind: Composer.PropType.Article,
      date: currentBlogEntry.date,
      article: article
    }

    return <Composer.BlogComposer {...composerProps }/>
  }
}