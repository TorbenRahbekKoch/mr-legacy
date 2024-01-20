# Migrating from Webpack to Vite

## Setup

As [previously described](https://mrlegacy.dk/blogs/about-this-site) the 
site is a React application, created with `create-react-app`, which
[is now dead](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o).

Apart from it being dead there were several issues with it. Underneath an
obscene (and obscure) amount of hidden layers ran webpack 4 (I think). This has since
been superseeded by version 5. On top of that (that is still deep, deep down)
there was a lot of other stuff with intricate version dependencies, which made
it near impossible to update e.g. TypeScript to newer versions.

I took a deep breath and re-created the application using Vite instead:

````
npm create vite@latest
````

Choosing `React` - with `TypeScript`. 

All packages where updated, and various packages from 
the previous `package.json` where added, as well, in the
newest version, of course. The package `vitest` was added.

Most files from the previous repository, including the `.git`
directory where copied to the new directory.

## Testing

Most of the changes from the change to Vite is with testing. 

When using [Vite](https://vitejs.dev/) it is recommended to also use 
[Vitest](https://vitest.dev/), which calls for a bit of setup.

You can follow along on [Github](https://github.com/TorbenRahbekKoch/mr-legacy).

| File | Description |
|------|-------------|
| vitest.config.ts | Configures Vitest, especially `setupTests.ts`  |
| src/setupTests.ts | Responsible for adding matchers from [jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) and adding a global cleanup| 
| tsconfig.json | Adding vitest/globals types | 
| package.json | Adds `"test": "vitest --watch"` for `npm run test` |

Apart from these files, there where a few changes to some
test files, e.g. `ArticleList.test.tsx`. The functions
`describe`, `expect`, `it` must be imported from 
`vitest`, whereas e.g. `render` and `screen` are
imported from `@testing-library/react`.

Due to the `jest-dom`-matchers being added in `setupTests.ts` it
is possible to use matchers like e.g. `.toHaveStyle`, of which an 
example can be seen in `Category.test.tsx`.

## Conclusion

For a small website like this is was straight forward and
painless to throw webpack out and replace it with Vite.