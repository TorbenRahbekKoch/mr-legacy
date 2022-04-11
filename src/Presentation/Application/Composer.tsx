import { useRouter, MatchRoute } from '../../Infrastructure/Routing'
import * as Style from './Style'
import * as Menu from '../Menu'

export interface Texts {
  danish: string
  english: string
}

export interface Props {
  headerController: () => JSX.Element
  blogController: (location: Location) => JSX.Element
  cvController: () => JSX.Element
  currentLanguage: string
  requestLanguageChange: (language: string) => void
  texts: Texts
}

export function Composer(props: Props) {

  const router = useRouter([
    new MatchRoute("cv", (location) => props.cvController()),
    new MatchRoute("blogs", (location) => props.blogController(location)),
  ],
  )

  router.setDefaultRoute(() => {
    return (props.cvController())
  })

  const menuTexts = {
    danish:  props.texts.danish,
    english: props.texts.english
  }

  return (
    <Style.Application>
      { props.headerController() }
      <Menu.Menu currentLanguage={props.currentLanguage} requestLanguageChange={props.requestLanguageChange} texts={menuTexts}/>
      {router.execute(window.location)}
    </Style.Application>
  );
}