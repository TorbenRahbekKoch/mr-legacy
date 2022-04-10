import { Props as TitleProps } from './Articles/Title'

/**  
 * The data interface needed by the Blog Controller
 * Note that we here use TitleProps, this is - of course - lazyness,
 * since it is intended to be used by the EntryTitle component
 * We instead ought to use something else. I'll get back to that one...
 * 
 * The actual implementation of a repository is an infrastructure concern
 * and there said implementation will be to find in the Infrastructure
 * part of the project.
*/ 
export interface Repository {
  getAllBlogEntries: (blogEntriesReceived: (entries: TitleProps[]) => void) => void 
  getArticle: (url: string, articleReceived: (text: string) => void) => void
}