/**  
 * The data interface needed by the InfoPage Controller. 
 * The format of the page content is on a need to know
 * basis only, and the repository does not need to know.
 * 
 * The actual implementation of a repository is an infrastructure concern
 * and there said implementation will be to find in the Infrastructure
 * part of the project.
*/ 
export interface Repository {
  getInfoPageContent: (infoPageName: string, infoPageContentRetrieved: (infoPageContent: string) => void) => void 
}