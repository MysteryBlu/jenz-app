# JenzApp

This is a test project using Angular 14 for Jenz interview process

## Requirements

Angular 14+  
Node 16.10+  

## Setup

### Clone the repo

```shell
git clone https://github.com/bryanforbes/intern-angular
cd intern-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```

### Running development server

```shell
npm start
```
The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `4200`.

Navigate to `localhost:4200` to view the app

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run lint` - runs `eslint` on the project files.
