# About this site

I started this site for two reasons: I wanted a place to have my CV readily available and
having it be fairly easy to update.

I also want to work with various ideas on how to
organize SPAs (Single Page Applications) since the they
tend to quickly end up in a tangled mess even faster than
backend applications do.

Backend applications have the advantage of many, many years of
experience, good advice and - in a lot of cases - relatively decent languages, whereas
frontend applications have, well, JavaScript. Yes, I know, there is TypeScript and I do not
entirely dislike TypeScript. It is, in some areas, a vast improvement over JavaScript and
in other areas a syntactic (and close to unreadable) mess. TypeScript seems to me to be a playground for
all kinds of syntactic sugar, which of course is fun if you are a language designer, but usually less fun if you
are a developer playing the frantic game of keeping up with not just new language features but also the framework of the month.

Frontend development (frontend as in browsers), as it is done now with lots of programming, is a younger discipline than backend and desktop development, which honestly is still a young and struggling discipline.

## React

Well, regardless of my rant against TypeScript above I have chosen to use
use exactly that for creating this site together with React, and you may have
guessed it: I do not *entirely* dislike React. Actually I quite like the component 
based approach of React. More articles about that in the exciting future.

I simply created the site with [create-react-app](https://create-react-app.dev/):

```` bash
yarn create react-app mr-legacy --template typescript
````

This even initializes a git repository! The code for entire site is available
on [github](https://github.com/TorbenRahbekKoch/mr-legacy/) - yup, there is some
confusion about my name, but as it happened I got married and chose her last name.
Changing the account name on github seems to be a daunting and dangerous task.

## Interesting components and packages

- [Styled Components](https://styled-components.com/)
- [ReactMarkdown](https://github.com/remarkjs/react-markdown)

## Testing

Well, there's some work ahead of me here. I am *trying* to test a few components
here and there with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), but I can't say that I have more than just dipped my feet.

## Hosting

The site is hosted as an Azure Static Web App - see <https://websitebeaver.com/deploy-create-react-app-to-azure-static-web-apps>
for how to make this work. It is surprisingly easy. With that guide you have
a CI/CD-pipeline, just like that.

## Now, what's with that 90s www?

Yeah, I'm not proud of it. It is combination of the DNS provider not supporting
root-level/apex CNAME/ALIAS and me using the above hosting, which needs a CNAME
pointing at it.

I probably will  get around to solving that later!
