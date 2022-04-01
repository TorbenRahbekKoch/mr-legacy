import * as Article  from './Article'
import { FilteredArticleList } from "./FilteredArticleList";
import { Props as EntryTitleProps } from './EntryTitle'
import { CategoryList, SelectionChanged } from './Categories/CategoryList';

export enum PropType  {
  Article,
  ArticleList
}

export interface ArticleProps {
  kind: PropType.Article
  date?: Date
  article: string
}

export interface ArticleListProps {
  kind: PropType.ArticleList
  allCategories: string[]
  selectedCategories: string[]
  blogEntries: EntryTitleProps[]
  selectionChanged: SelectionChanged
}

export type Props =  ArticleProps | ArticleListProps 

export function Composer(props: Props) {
  if (props.kind === PropType.ArticleList) {
    return (<>
      <FilteredArticleList 
        activeCategories={props.selectedCategories} 
        blogEntries={props.blogEntries }/>
      <CategoryList 
        allCategories={props.allCategories} 
        selectedCategories={props.selectedCategories} 
        selectionChanged={props.selectionChanged}/>
    </>)
  }
  else {
    return (
      <Article.Article date={props.date} article={props.article} />
    );
  }
}
