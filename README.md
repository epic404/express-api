# Express API

A simple project to demonstrate how to accomplish the following:

- `// @routes`: Route handling
- `// @middleware`: Middleware (authentication)
- `// @schema`: Schema validation
- `// @errors`: Error handling

Comments will be added throughout the project to highlight how each of these are handled. Use the above tags to search for these comments to follow along.

## Getting Started

1. Install deps w/ `yarn install`.
2. Start the dev server with `yarn dev`.
3. Hit the API to create a JWT with postman.

## The Good

### Stability

The commit history for Express is pretty sparse in the recent history- which means one thing... stability! If it ain't broke don't fix it. While Express is so old that it is boring, it is nothing if not stable and battle-tested in the wild.

### Architecture

For better or for worse, Express is a pretty minimal framework (it's more of a library), and you can create any kind of project structure you want. Also a bad thing, see below.

## The Bad

### Maintining TS Support

With other frameworks, TS support is built-in right "out of the box." With Express, you have to maintain TS support for the life of the project. For example, I'm not 100% sure we are running our builds the prescribed way- the TS docs changed since the last time I used them. They used to walk you through creating a `tsconfig.json` and setting everything up, now its just a huge reference of every configurable option.

### Express Was Made For JS, Not TS

A common Express convention is to add user data to the request object, especially in the auth flow. This works great with Javascript, but TypeScript hates it. You can augment the Express `Request` type in index.d.ts, but it feels like a hack at best.

### Architecture

If you take a sampling of Express apps from out in the wild- you will probably see that there is no single convention of structuring an Express app. You can basically build it out however you want, based on the problems you are trying to solve. Express' unopinionated nature is both a strength and a weakness. I am putting it more in the weakness category, because if you find out down the road that you didn't set up your architecture right- you are outta luck.

## The Verdict
