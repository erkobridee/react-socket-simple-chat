# Project


## Architecture

### Frontend

* It uses React to build the UI, React Router to handle its pages, Redux to manage its data/states, Redux Thunk to have a middleware where is possible to inject the socket.io client to send the messages and the function to switch between languages. ([useful references](useful-references.md#react-and-redux-middleware-thunk---) about them)

* It follows the redux re-ducks pattern and try to follow some react + redux code style guide ([useful references](useful-references.md#code-style-guide) about it)

* It uses SASS to handle the styles, follows the BEM pattern and uses the flexbox to handle the layout ([useful references](useful-references.md#styles-css-and-sass))


### Backend - socket.io server

* It has it own socket.io server and also has a deployed version of it over the now.sh ([read more about](../../server/README.md))


### Tools

* It uses the [node.js](https://nodejs.org/) LTS (v8)

* It uses the [Webpack](https://webpack.js.org/) v4 with the HMR support and is tunned to enable a multi devices development ([useful references](useful-references.md#webpack))

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

* main folders

  ```
  ./
    docs/
    server/
    src/
  ```
  
  * `docs/` - documentation

  * `server/` - socket.io server code

  * `src/` - project code

* build folder

  * when executes a command `yarn build` or `npm run build` the build content will be placed at the `./dist` folder


## Code

* on the root `./`

  * It uses the ES6+ through Webpack + Babel ([.babelrc](/.babelrc) file)

  * It defines the web browsers support on the [.browserslistrc](/.browserslistrc) file, that is loaded and used by the Webpack to generate the production build

* on the `./src/`

  * `index.html` - html template, where is define the injection point to be used by the `ReactDOM.render`

  * `index.scss` - main scss (SASS) file

  * `index.js` - loads the main scss file, the application component and inject it on the html

  * each inner folder has it own `index.js` file that exposes its content as a module, to be imported like `import localStorageService from 'chat/services/localstorage';`

* sass styles

  * global definitions `./src/styles/`

    * main file `_all.scss` - has the imports of all `.scss` files on the folder

  * all others scss files area placed with each module/component folder

    * `./src/index.scss` imports `./src/styles/_all.scss` and `./src/chat/_styles.scss` files

    * `./src/chat/_styles.scss` imports `./src/chat/(components/containers)/_styles.scss`

    * and so one, where each `_style.scss` will import the `_styles.scss` from it's inner folders

* dumb/presentation components: `./src/chat/components/`

  * only used to presentation, where most of them are stateless/functional components

* container components: `./src/chat/container`

  * components that will receive data through injection, following the HOC ([Hight-Order Components](https://reactjs.org/docs/higher-order-components.html)): Redux > React Router > i18next (internationalization)

* services: `./src/chat/services`

  * hash - used to generate a random id to the initial user name, following the pattern `Guest_{random}`

  * i18n - internationalization config and resources

  * is-mobile - check if the application was loaded over a device mobile/tablet

  * localstorage - handle and manages the web browser localstorage to persist the application data/states

  * socketclient - uses socket.io client to connect or uses a mock client that emulates the socket.io client expected behaviors

* states - redux re-ducks modules ([useful references](useful-references.md#code-style-guide) about it): `./src/chat/states`

  * each redux module should expose its reducer by default

  * those modules are imported on the `./src/chat/states/store.js`

  * it manage 3 datasets/states of the application: connection, messages, settings (this last one has all of its inner reducers assigned at the redux root state)

## Dependencies

* defined on the [package.json](/package.json) file

**TODO:** list them and its links
