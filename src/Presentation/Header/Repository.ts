import { QuoteData } from './Quote'

export interface Repository {
  getQuotes: (quotesReceived: (quotes: QuoteData[]) => void) => void 
}