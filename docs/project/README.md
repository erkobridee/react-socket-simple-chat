# Project

- [Architecture](#architecture)
  - [Frontend](#frontend)
  - [Backend - socket.io server](#backend---socketio-server)
  - [Tools](#tools)
- [Folders](#folders)
- [Code](#code)
- [Dependencies](#dependencies)

## Architecture

### Frontend

* It uses React to build the UI, React Router to handle its pages, Redux to manage its data/states, Redux Thunk to have a middleware where is possible to inject the socket.io client to send the messages and the function to switch between languages. ( [useful references](useful-references.md#react-and-redux-middleware-thunk---) )

* It follows the redux re-ducks pattern and try to follow some react + redux code style guide ( [useful references](useful-references.md#code-style-guide) )

* It uses SASS to handle the styles, follows the BEM pattern and uses the flexbox to handle the layout ( [useful references](useful-references.md#styles-css-and-sass) )


### Backend - socket.io server

* It has it own socket.io server and also has a deployed version of it over the now.sh ( [read more about it](../../server/README.md) )


### Tools

* It uses the [node.js](https://nodejs.org/) LTS (v8)

* It uses the [Webpack](https://webpack.js.org/) v4 with the HMR support and is tunned to enable a multi devices development ( [useful references](useful-references.md#webpack) )

  * It is also has a configuration to make it possible to do imports where the `./src/` is the root folder, so we can do imports like `import constants from 'chat/constants';` from anywhere in the project code

* It has support for dotenv files to configure the application variables through them

  * [.env.example](/.env.example) (present on the repository and serve as model)

  * [load](/webpack.config.js#L45-L85) the file following the search order

    ```
    1. .env.(production|development)
    2. .env.local
    3. .env
    4. .env.example
    ```

## Folders

* overview map

  ```
  ./
    dist/
    docs/
    server/
    src/
      chat/
        components/
        container/
        services/
        states/
      styles/ 
  ```

* main folders

  ```
  ./
    dist/
    docs/
    server/
    src/
  ```
  
  * `docs/` - documentation

  * `server/` - socket.io server code

  * `src/` - project code

  * `dist/` production build

    * created by the command `yarn build` or `npm run build` 


## Code

* overview map

  ```
  ./
    package.json
    .env
    .babelrc
    .browserlistrc
    webpack.config.js
    src/
      chat/
        components/
        containers/
        services/
        states/
        _styles.scss
        constants.js
        Routes.js
        Chat.js
        index.js
      styles/
      app.js
      index.scss
      index.html
      index.js
  ```

* `./` - root

  * `package.json` - defines the project dependencies

  * `.env` ( `.env.examples` available on the repository ) - define some set of environments to be used following the target build

  * `[.babelrc](/.babelrc)` - it defines the support to the ES6 syntax through the Webpack + Babel

  * `[.browserslistrc](/.browserslistrc)` - it defines the web browser supported by the application and is used by the Webpack on the production build flow

  * `webpack.config.js` - defines the configuration to the webpack development and production flows

* `./src/`

  * `index.html` - html template, where is define the injection point to be used by the `ReactDOM.render`

  * `index.scss` - main scss (SASS) file

  * `index.js` - loads the main scss file, the application component and inject it on the html

  * each inner folder has it own `index.js` file that exposes its content as a module, to be imported like `import localStorageService from 'chat/services/localstorage';`

* sass styles

  * `./src/styles/` - global definitions

    * main file `_all.scss` - has the imports of all `.scss` files on the folder

  * all others scss files area placed with each module/component folder

    * `./src/index.scss` imports `./src/styles/_all.scss` and `./src/chat/_styles.scss` files

    * `./src/chat/_styles.scss` imports `./src/chat/(components/containers)/_styles.scss`

    * and so one, where each `_style.scss` will import the `_styles.scss` files from its inner folders

* `./src/chat/components/` - dumb/presentation components

  * only used to presentation, where most of them are stateless/functional components

* `./src/chat/container` - container components

  * components that will receive data through injection, following the HOC ([Hight-Order Components](https://reactjs.org/docs/higher-order-components.html)): Redux > React Router > i18next (internationalization)

* `./src/chat/services` - services

  * `hash/` - used to generate a random id to the initial user name, following the pattern `Guest_{random}`

    * uses [hashids.js](https://hashids.org/javascript/)

  * `i18n/` - internationalization config and resources

    * uses [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/)

  * `is-mobile/` - check if the application was loaded over a device mobile/tablet

    * uses regex over the web browser [navigator.userAgent](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent)

  * `localstorage/` - handle and manages the web browser localstorage to persist the application data/states

    * uses the web browser [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) support

  * `socketclient/` - uses socket.io client to connect or uses a mock client that emulates the socket.io client expected behaviors

    * uses [socket.io-client](https://socket.io/docs/client-api/)

* `./src/chat/states` - redux re-ducks modules ([useful references](useful-references.md#code-style-guide) about it): `./src/chat/states`

  * each redux module should expose its reducer by default

  * `store.js` - import re-ducks modules (its reducers) from the `ducks/` folder

  * it manages 3 datasets/states of the application: connection, messages, settings (this last one has all of its inner reducers assigned at the redux root state)


## Dependencies

* [classnames](https://www.npmjs.com/package/classnames)

* [dayjs](https://www.npmjs.com/package/dayjs)

* [hashids](https://www.npmjs.com/package/hashids)

* [lodash](https://www.npmjs.com/package/lodash)

* [prop-types](https://www.npmjs.com/package/prop-types)

* [i18next](https://www.npmjs.com/package/i18next)

* [react-i18next](https://www.npmjs.com/package/react-i18next)

* [react](https://www.npmjs.com/package/react)

* [react-dom](https://www.npmjs.com/package/react-dom)

* [react-router-dom](https://www.npmjs.com/package/react-router-dom)

* [react-redux](https://www.npmjs.com/package/react-redux)

* [redux](https://www.npmjs.com/packageredux)

* [redux-thunk](https://www.npmjs.com/package/redux-thunk)

* [socket.io-client](https://www.npmjs.com/package/socket.io-client)

* [uuid](https://www.npmjs.com/package/uuid)
