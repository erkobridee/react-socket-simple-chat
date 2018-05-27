# React Socket Simple Chat - Socket.io Server

Simple socket.io server to handle the chat messages

* to run the socket.io server: `yarn start` or `npm start`

* the socket.io listen and emits the event `message` with the object model: `{ message: 'Hello socket.io server', user: 'username' }`


## Server deployment on now.sh

Deployed on `now.sh` ([zeit.co/now](https://zeit.co/now))

### now requirement

Must have the `start` script defined on the `package.json`

### now commands

* deploy to the server: `now` ([Deployment | now docs](https://zeit.co/docs/getting-started/deployment))

* define a alias to the deployed instance: `now <SOURCE URL | ID> react-socket-simple-chat-server` ([Aliases and Domains | now docs](https://zeit.co/docs/features/aliases))

* make sure to have only one instance of the server: `now scale <SOURCE URL | ID> sfo 1 1` ([Global Scaling | now docs](https://zeit.co/docs/features/scaling))
