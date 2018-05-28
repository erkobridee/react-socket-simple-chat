# Technical requirements by versions

- [1.0.0](#100)
- [next](#next)

## 1.0.0

* Single page application that must be mobile first

* Should run over multiple devices ( mobile, tablet and desktop ) with responsive design, and it has to work on both screen orientation, portrait and landscape

  * CSS Flexbox to handle the layout

  * Use a popular CSS preprocessor ( for example: SASS )

* Should be writed using the JavaScript ( [ES6](http://es6-features.org/)+ ), "compiled" to the actual web browsers javascript using the [BabelJS](https://babeljs.io/)

  * React.js 16 and Redux are recommended

  * The code should be: modular, small, commented and clean

* **Important:** the build version of the application should be able to run over a web server and locally by openning the index.html file on the web browser

* Socket.io server

  * Should have a local one to development

  * Should be able to connect to a remove server

  * The application should emit and listen the event `message`

  * The message object model should be `{ user: "user name", message: "Hello socket.io server" }`


## next

* Unit testing

* Code documentation (for example: JSdoc)

* Review and improve `webpack.config.js
