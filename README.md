# familytree

This is a long-term project I'll be working on to document the people in my family, past and present.

I'd like to have a text description of each person along with whatever pictures are available. The next step would be then creating links and relationships between these individuals (parents/cousins/etc.)

Now how to display this? My family history is a bilingual one and so should be the result. I think relationships trump individual histories, so the first visual would be a big tree. Clicking on an individual node within the graph would then transition you to (or pop-up) the individual's profile.

It may also be fun to create a graph option using the same backend (or even have the ability to visualize in a bunch of different ways- Voronoi, circle, etc.)

# resources

## frontend
* [SO: how do you create a family tree in D3.js?](http://stackoverflow.com/questions/31245751/how-do-you-create-a-family-tree-in-d3-js)

## backend

# data structures and objects

### person

> most likely stored as a JSON object

* name (string)
* id (string) - unique identifier
* birthday (date)
* death or currently living (date or null)
* description (string)
* no_parent (bool) - would be true for any roots of the tree
* children (array of child IDs)


[![Build Status](https://travis-ci.org/hack-duke/hackduke-dayof.svg?branch=master)](https://travis-ci.org/hack-duke/hackduke-dayof)

##Overview
This project provides information that hackers will use the day of the hackathon, including event info, schedule, maps, travel info, speakers, and data sets.

## Project Structure
```
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application bootstrap and rendering
│   ├── components           # Reusable Presentational Components
│   ├── containers           # Reusable Container Components
│   ├── layouts              # Components that dictate major page structure
│   ├── redux                # Reducers/constants/actions not part of a route
│   ├── routes               # Main route definitions and async split points
│   │   ├── index.js         # Bootstrap main application routes with store
│   │   └── Home             # Fractal route
│   │       ├── index.js     # Route definitions and async split points
│   │       ├── assets       # Assets required to render components
│   │       ├── components   # Presentational React Components
│   │       ├── container    # Connect components to actions and store
│   │       ├── modules      # Collections of reducers/constants/actions
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── styles               # Application-wide styles (generally settings)
└── tests                    # Unit tests
```
## Getting started
```bash
$ npm install                                       # Install project dependencies
$ npm run serve                                     # Compile and launch
```

NOTE: If you are having trouble with localhost redirecting to https, please use the ip and port url instead.

Additional scripts are here:

|`npm run <script>`|Description|
|------------------|-----------|
|`serve`|Serves your app. HMR will be enabled in development.|
|`start`|Serves the app for production (called on heroku).|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this

##Merging changes
Make sure to squash all commits upon merge, using Github's "squash and merge" functionality.

##Spacing
Please use 2 spaces to indent

##Deployment instructions
Currently using heroku for deployment

##Continous integration
Currently using travis CI to run the tests on every build and deploy to heroku on merges to master

##Configuration variables

If you would like to edit or add config variables, .env must be updated but two other places must be modified. The globals in `~/config/index.js`. and specified as well in `~/.eslintrc`.

## Server

This starter kit comes packaged with an Koa server. The purpose of the server is to provide `webpack-dev-middleware`, `webpack-hot-middleware` for hot module replacement, and basic auth for the server.

##Starter kit

Special thanks to davezuko, this repository is based on https://github.com/davezuko/react-redux-starter-kit. See it's README for more information.
