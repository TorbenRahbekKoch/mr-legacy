import { Repository } from '../../../Presentation/Header/Repository'
import { QuoteData } from "../../../Presentation/Header";
import * as Fetch from '../Fetch'

export class Header implements Repository {
  language: string;

  constructor(language: string) {
    this.language = language
  }

  getQuotes(quotesReceived: (quotes: QuoteData[]) => void) {
    Fetch.fetchQuotes(quotes => {

      const applicableQuotes = quotes.quotes
        .filter(quote => quote.languages.find(value => value === this.language) != null)
        .map(quote => ({ quote: quote.quote, author: quote.author } as QuoteData))

      quotesReceived(applicableQuotes)
    })
  }
}