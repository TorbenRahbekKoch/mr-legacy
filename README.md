# Mr. Legacy

## Creating the application

As [previously described](https://mrlegacy.dk/blogs/about-this-site) the 
site is a React application, created with `create-react-app`, which
is [now dead](https://dev.to/ag2byte/create-react-app-is-officially-dead-h7o).

Apart from it being dead there were several issues with it. Underneath an
obscene (and obscure) amount of hidden layers ran webpack 4 (I think). This has since
been superseeded by version 5. On top of that (that is still deep, deep down)
there was a lot of other stuff with intricate version dependencies, which made
it near impossible to update e.g. TypeScript to newer versions.

I took a deep breath and re-created the application using Vite instead

````
npm create vite@latest
````

Then choosing `React` - with TypeScript. 

Updating all packages and adding a slew of testing packages:

````
    "@testing-library/jest-dom": "^6.2.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/user-event": "^14.5.2",
    "@types/jest": "^29.5.11",
    "ts-jest": "^29.1.1",
    "vitest": "^1.2.0"
    "jsdom": "^23.2.0",
    
    "vite-tsconfig-paths": "^4.3.1"
````


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
