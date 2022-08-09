# No, you don't need a state management library

## With our without it

When I started this site, I used a state management library, because that is what
seems to be the *best* practice (never mind that the road to mediocrity is [paved with best practices](https://business.simplicable.com/business/new/why-best-practices-are-mediocre)). I tried out the new (to me) and shiny [Zustand](https://github.com/pmndrs/zustand)
which is really not bad.

I then started the Amazing Code Adventure - refactoring the application
so it had a decent architecture - to some extent working towards
[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
and ended up not needing a state management library.

"What?!" you may feel tempted to shout out. "But what are you then doing with your state?" a
reasonable follow-up question might be.

I could then simply point you to [useState](https://reactjs.org/docs/hooks-state.html)
and move on. But there is a bit more to it, than that. In the React applications I have seen
(which is, honestly, not that many) there seemed to be no really good place to store
application state and handle application logic.
It wasn't clear where the [entry point](https://en.wikipedia.org/wiki/Entry_point)
of the application resided. Which is weird, because it is actually quite obvious.

If you are using [create-react-app](https://create-react-app.dev/) to create the application
you'll have a very obvious entry point: `App.tsx`. It will per default look something like this:

````typescript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
````

What I like to do - I say as if I've done this a zillion times instead of just one - is to
split ``App.tsx``  into two: `Controller` and `Composer`. The jury (me, that is)
is still out on whether *Composer* should be instead named *View* to keep the naming in line
with the various [MVC pattern variants](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
but since it actually *composes* other *views* I find *Composer* is a fairly
fitting name.

> **NOTE:** I use the phrase **view** instead of **component** to avoid
> confusing it with a React-component. And a **view** is not necessarily just
> a single file component, but can easily be implemented by several 
> components spread over several files.

What I furthermore like to do is to place these two files in `/Presentation/Application` and add
an `index.ts` file, as well.

`Controller.tsx` will be, for now, be very simple:

````typescript
import { Composer } from "./Composer"

export function Controller() {
  return <Composer/>
}
````

as will `index.ts`:

```` typescript
export { Controller } from './Controller'
````

I then change `index.tsx` in the root to use the above `Controller`:

```` typescript
import * as Application from './Presentation/Application'
  ....
ReactDOM.render(
  <React.StrictMode>
    <Application.Controller/>
  </React.StrictMode>,
  document.getElementById('root')
)

````

> **Note:** `import * as Application` is made
possible by (and makes sense because of)
using `index.ts` to export from the
`Application` directory. This is a way to
*namespace* imports making conflicting names easier
to handle.

So what should you use the `Controller.tsx` for? This is where
application wide logic and general configuration should reside.
First and foremost initialization/bootstrapping logic, e.g. fetching
localized texts from the server.

The [actual code for initializing and bootstrapping](https://github.com/TorbenRahbekKoch/mr-legacy/tree/master/src/Infrastructure/BootStrapping) should be placed
in `/src/Infrastructure/Bootstrapping` and simply be [called from the `Controller`](https://github.com/TorbenRahbekKoch/mr-legacy/blob/master/src/Presentation/Application/Controller.tsx).

Application wide state - or ambient state - can then be stored
in the `Controller` using a combination of e.g. [useState](https://reactjs.org/docs/hooks-reference.html#usestate), [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) and [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback).

Application wide logic - this could be e.g. change of language, log on, log out - should
be handled by the `Controller`, as well.

If you have a very simple application you could choose to simply have it all in
`Composer` and then split it up when needed.

React sees the `Controller` as part of the render-tree and the virtual DOM, which makes
me wonder whether the `Controller` should instead be a hook and used
in `Composer` - something like this:

````typescript
export function Composer() {
    const controller = useController(some parameters)    
}
````

This would stop React from rendering `Controller` which is an obvious waste.

## Property drilling

Having a Controller/Composer pair is not just useful for the application root, it is
quite useful for any logically connected (cohesive) part of the application.

For this site I also have a pair for:

- [Header](https://github.com/TorbenRahbekKoch/mr-legacy/tree/master/src/Presentation/Header)
- [Cv](https://github.com/TorbenRahbekKoch/mr-legacy/tree/master/src/Presentation/Cv)
- [Blog](https://github.com/TorbenRahbekKoch/mr-legacy/tree/master/src/Presentation/Blog)

Not having a state management library does, of course, result in *some* property drilling
but this does also make it way easier to test a component, since you simply [pass
the necessary data](https://github.com/TorbenRahbekKoch/mr-legacy/blob/master/src/Presentation/Blog/Controller.test.tsx)
directly into the component when testing. No need for initializating some store
or messing around with the context api.

## Summary

This was a short introduction to how you do really not need a state management library
in React-applications. More will follow in coming articles about organizing
and architecting React-applications.

