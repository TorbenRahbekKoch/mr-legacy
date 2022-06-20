import { Repository } from '../../../Presentation/Services/Repository'
import * as Fetch from '../Fetch'

export class Services implements Repository {
  language: string;

  constructor(language: string) {
    this.language = language
  }

  getServices(servicesReceived: (services: string) => void) {
    Fetch.fetchServices(this.language, servicesReceived);
  }
}