import * as Article  from './Articles/Article'
import { FilteredArticleList } from "./Articles/FilteredArticleList";
import { Props as EntryTitleProps } from './Articles/Title'
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

export function BlogComposer(props: Props) {
  if (props.kind === PropType.ArticleList) {
    return (<>
      <CategoryList 
        allCategories={props.allCategories} 
        selectedCategories={props.selectedCategories} 
        selectionChanged={props.selectionChanged}/>
    
      <FilteredArticleList 
        activeCategories={props.selectedCategories} 
        blogEntries={props.blogEntries }/>
    </>)
  }
  else {
    return (
      <Article.Article date={props.date} article={props.article} />
    );
  }
}
