import * as ArticleList from './ArticleList';
import { Props as EntryTitleProps } from './EntryTitle'

export interface Props {
  blogEntries: EntryTitleProps[]
  activeCategories: string[]
}

function shouldShow(entry: EntryTitleProps, activeCategories: string[]): boolean {
  if (entry.date == null)
    return false
  else {
    return entry.date.getDate() < Date.now()
      && (activeCategories.length === 0
        || activeCategories.some(
          category => entry.categories.some(entryCategory => entryCategory === category)))
    }
}

export function FilteredArticleList({ ...props }: Props) {
  const blogEntries = props.blogEntries
    .filter(entry => shouldShow(entry, props.activeCategories))

  const filteredProps: ArticleList.Props = {
    blogEntries: blogEntries
  };

  return ArticleList.ArticleList(filteredProps);
}
