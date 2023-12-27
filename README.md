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

## The Bad

### Maintining TS Support

With other frameworks, TS support is built-in right "out of the box." With Express, you have to maintain TS support for the life of the project. For example, I'm not 100% sure we are running our builds the prescribed way- the TS docs changed since the last time I used them. They used to walk you through creating a `tsconfig.json` and setting everything up, now its just a huge reference of every configurable option.

## The Fugly
