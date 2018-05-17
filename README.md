# react-socket-simple-chat

<!-- A simple chat application that uses react.js, redux and socket.io. -->


## Status

Development tools build on top of webpack v4, with HMR (also react HMR), sass and css modules support, and the webpack-dev-server uses the machines IP from the local network to enable the multi screen development, with that is possible to have the application openned over the desktop, tablet and mobile at the same time.

I also keep the webpack configure to consider the file paths from the `./src` directoty, and with that avoid the import hell to return to parents directory ( avoid: `import ComponentName from '../../components/ComponentName'`, to use like: `import ComponentName from 'components/ComponentName'` where the components directory is located at `./src/components`, so no matter how deep you are, you'll be able to import from the project src root folder ).

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

* [React](https://reactjs.org/)

* [Webpack](https://webpack.js.org/)

* [Understanding and Using rem Units in CSS — SitePoint](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)

* [How to use Webpack with React: an in-depth tutorial | freeCodeCamp](https://medium.freecodecamp.org/learn-webpack-for-react-a36d4cac5060)

* [Optimizing front-end delivery with Webpack 4 | Jasel Gadhia](https://jes.al/2018/04/optimizing-front-end-delivery-with-Webpack-4/)

