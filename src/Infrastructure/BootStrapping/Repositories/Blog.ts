import { Repository } from '../../../Presentation/Blog/Repository'
import { Props as TitleProps } from '../../../Presentation/Blog/Articles/Title'
import * as Fetch from '../Fetch'

export class Blog implements Repository {
  getArticle(url: string, articleReceived: (text: string) => void) {
    Fetch.fetchArticle(url, articleReceived)
  }

  getAllBlogEntries(blogEntriesReceived: (entries: TitleProps[]) => void) {
    Fetch.fetchBlogs(blogs => {
      const blogEntries = blogs.blogEntries
        .map(blog => {
          const date =
            blog.date === null
              ? undefined
              : new Date(blog.date)

          return {
            url: blog.url,
            title: blog.title,
            teaser: blog.teaser,
            dir: blog.dir,
            date: date,
            categories: blog.categories
          } as TitleProps
        })

      blogEntriesReceived(blogEntries)
    })
  }
}