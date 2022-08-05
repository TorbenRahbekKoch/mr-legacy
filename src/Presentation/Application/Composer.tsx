import { Router } from '../../Infrastructure/Routing'
import * as Style from './Style'
import * as Menu from '../Menu'

export interface Texts {
  danish: string
  english: string
  services: string
}

export interface Props {
  router: Router
  headerController: () => JSX.Element
  currentLanguage: string
  requestLanguageChange: (language: string) => void
  texts: Texts
}

export function Composer(props: Props) {

  const menuTexts = {
    danish:  props.texts.danish,
    english: props.texts.english,
    services: props.texts.services
  }

  return (
    <Style.Application>
      { props.headerController() }
      <Menu.Menu currentLanguage={props.currentLanguage} requestLanguageChange={props.requestLanguageChange} texts={menuTexts}/>
      {props.router.execute(window.location)}
    </Style.Application>
  );
}