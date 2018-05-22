# react-socket-simple-chat

A simple chat application that uses react.js, redux and socket.io.

**TODO:** define detailed project documentation under the `docs/` directory

## Prerequisites

* Must have [Git](https://git-scm.com/) installed

* Must have the [node.js](https://nodejs.org/en/) (at least v8+) installed with the npm (Node Package Manager)


## Recommended

* Use the [yarn](https://yarnpkg.com/), you can install it over the npm `npm install -g yarn`

* Use a node version manager

  * [unix systems](https://github.com/creationix/nvm)

  * [windows](https://github.com/coreybutler/nvm-windows)


## Commands

### After cloned from the github repository

* `yarn` or `npm install`


### Available commands

* start the development: `yarn start` or `npm start`

* production build

  * generate: `yarn build` or `npm run build`

  * generate and test it: `yarn do-serve` or `npm run do-server`

* deploy the production build to the github gh-pages: `yarn do-deploy` or `npm run do-deploy`


## Useful links

* [Understanding and Using rem Units in CSS — SitePoint](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

### Webpack

* [Webpack](https://webpack.js.org/)

* [How to use Webpack with React: an in-depth tutorial | freeCodeCamp](https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060)

* [Optimizing front-end delivery with Webpack 4 | Jasel Gadhia](https://jes.al/2018/04/optimizing-front-end-delivery-with-Webpack-4/)

### React and Redux( middleware( thunk )  )

* [React](https://reactjs.org/)

* [Redux](https://redux.js.org/)

  * [[Sandbox Editor] Todos](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos)

* [[GitHub] reduxjs / redux-thunk](https://github.com/reduxjs/redux-thunk) - use [withExtraArgument](https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument) to inject the SocketIO service and localstorage service API

  * [Super Simple Redux Thunk Example | Tyler Buchea](http://blog.tylerbuchea.com/super-simple-redux-thunk-example/) - 2017/10/10 ([Sandbox Editor](https://codesandbox.io/s/github/tylerbuchea/my-simple-async-app))

* [[Gist] datchley / react-redux-style-guide.md](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf) - React + [Redux](https://gist.github.com/datchley/4e0d05c526d532d1b05bf9b48b174faf#redux) Style Guide

* Project architecture re-ducks: [Scaling your Redux App with ducks | freeCodeCamp](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be)

  * [[GitHub] alexnm / re-ducks](https://github.com/alexnm/re-ducks) - An attempt to extend the original proposal for redux modular architecture

  * [[GitHub] FortechRomania / react-redux-complete-example](https://github.com/FortechRomania/react-redux-complete-example) - A react+redux example project based on the re-ducks folder structure
