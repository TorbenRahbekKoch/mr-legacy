import { useState } from "react";

export type DefaultRoute = (() => JSX.Element) | null

export class Router {
  constructor(routes?: Route[], defaultRoute?: DefaultRoute) {
    if (routes != null){
      Router.routes = routes
    }
    else {
      Router.routes = []
    }

    if (defaultRoute != null) {
      Router.defaultRoute = defaultRoute
    }
    else {
      Router.defaultRoute = null
    }
  }

  static routes: Route[]
  static defaultRoute: DefaultRoute

  match(text: string, element: () => JSX.Element){
    Router.routes.push(new MatchRoute(text, element))
  }

  execute(location: Location):JSX.Element {
    const rule = Router.routes.find(rule => rule.tryMatch(location))
    if (rule !== undefined) {
      // TODO: Extract eventual parameters from url and query string and
      // give them as parameters to component() here:
      return rule.component()
    }
    else {
      if (Router.defaultRoute != null) {
        return Router.defaultRoute()
      }
      else {
        throw new RouterMatchError()
      }
    }
  }

  setDefaultRoute (fallback: () => JSX.Element){
    Router.defaultRoute = fallback
  }
}

interface Route {
  tryMatch: (location: Location) => boolean
  component: () => JSX.Element
}

export class MatchRoute implements Route {
  constructor(text: string, element: () => JSX.Element) {
    this.text = text
    this.component = element
  }

  tryMatch(location: Location): boolean {
    return (location.toString().indexOf(this.text) >= 0)
  }

  component: () => JSX.Element;
  text: string
}


export class RouterMatchError extends Error {

}

export function useRouter(rules?: Route[], defaultRoute ?: DefaultRoute): Router {
  const [router] = useState(new Router(rules, defaultRoute))
  return router;
}

