import { Repository } from '../../../Presentation/InfoPage/Repository'
import * as Fetch from '../Fetch'

export class InfoPage implements Repository {
  getInfoPageContent(infoPageName: string, infoPageContentRetrieved: (infoPageContent: string) => void) : void {
    Fetch.fetchInfoPageContent(infoPageName, infoPageContentRetrieved)
  }
}