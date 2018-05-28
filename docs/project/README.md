# Project


## Architecture

### Frontend

* It uses React to build the UI, React Router to handle its pages, Redux to manage its data/states, Redux Thunk to have a middleware where is possible to inject the socket.io client to send the messages and the function to switch between languages. ([useful references](useful-references.md#react-and-redux-middleware-thunk---) about them)

* It follows the redux re-ducks pattern and try to follow some react + redux code style guide ([useful references](useful-references.md#code-style-guide) about it)

* It uses SASS to handle the styles, follows the BEM pattern and uses the flexbox to handle the layout ([useful references](useful-references.md#styles-css-and-sass))


### Backend - socket.io server

* It has it own socket.io server and also has a deployed version of it over the now.sh ([read more about](../../server/README.md))


### Tools

* It uses the Webpack v4 with the HMR support and is tunned to enable a multi devices development ([useful references](useful-references.md#webpack))

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

**TODO:** define

## Code

* It uses the ES6+ through Webpack + Babel (.babelrc file)



**TODO:** define

## Dependencies

**TODO:** define

* React 16+

  * React DOM 16+

  * PropTypes 15+

  * React redux 5+

  * ?

