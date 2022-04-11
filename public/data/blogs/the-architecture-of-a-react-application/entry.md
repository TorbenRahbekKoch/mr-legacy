# The Architecture of a React-application

This is, of course, just a suggestion on how to structure
a React application. But following this guide  will make it far
easier to figure out where to put what and you might
even decide to drop your redux/zustand/whatever-store, since it
is no longer needed and will most likely only complicate things.

The assumption is that you have created a React application using
[create-react-app](https://create-react-app.dev/). It is
not important whether you're using JavaScript or TypeScript.

After creating the application you need to make a few changes. First
create a folder named `Presentation` (I'm not entirely
satisfied with this name, but currently it is my best bet)
within which you create an `Application` folder.

In this folder you now create files (generally use .jsx 
instead of .tsx if using JavaScript):

- Controller.tsx
- Composer.tsx
- index.ts
- Style.tsx - only if you use [styled-components](https://styled-components.com/)

Note: There is basically no problem with having
these files in the root directory, I just find
it more neat and tidy to move them into their
own directory.

You now move the content from `App.tsx` into `Composer.tsx` and change it slightly by renaming `App` to `Composer` and fixing the imports.

*Note: `Composer` could also be named `View` in line with various
[MVC pattern variants](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), but I think `Composer`
more correctly states that it composes a view made
up of other components.*

The `Controller.tsx` file is - for now - very simple:

````typescript
import { Composer } from "./Composer"

export function Controller() {
  return <Composer/>
}
````

Add the following to `index.ts`:

```` typescript
export { Controller } from './Controller'
````

You then change `index.tsx` in the root to use the above `Controller`:

```` typescript
import * as Application from './Presentation/Application'
  ....
ReactDOM.render(
  <React.StrictMode>
    <Application.Controller/>
  </React.StrictMode>,
  document.getElementById('root')
);

````

Note: `import * as Application` is made
possible by (and makes sense because of) 
using `index.ts` to export from the
`Application` directory. This is a way to
*namespace* imports making naming easier.

So what should you use the `Controller.tsx` for? This is where
application wide logic and general configuration should reside.
First and foremost initialization logic, e.g. fetching localized texts from the server.

You should factor out the actual initialization
code and place it in /src/Infrastructure/Bootstrapping to
keep the `Controller` simple.

Secondly, application root state
can/should be stored here with React's `useState`. If you
do insist on using a state management library this is also
where you would initialize that. Application root state
could be e.g. the current language, the logged on
user, and stuff like that.

Thirdly, application logic should be handled here. This
could be change of language, log on, log out.

If you are using a Router of some kind the logic for
that should most likely be put in `Composer.tsx`.

You are now ready to actually start developing your
React Application.

