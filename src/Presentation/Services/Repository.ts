export interface Repository {
  getServices: (servicesReceived:(services: string)=> void) => void
}