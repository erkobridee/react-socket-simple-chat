# React Socket Simple Chat - Socket.io Server

Simple socket.io server to handle the chat messages

* to run the socket.io server: `yarn start` or `npm start`

* the socket.io listen and emits the event `message` with the object model: `{ message: 'Hello socket.io server', user: 'username' }`


## tip to make socket.io server accepts multiple devices connections

* start the server using the network ip address

* add a CORS ( Cross-Origin Resource Sharing ) support ( [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) )

```javascript
app.use( ( req, res, next ) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  next();
});

app.options( ( req, res ) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.send(200);
});
```


## Server deployment on now.sh

Deployed on `now.sh` ([zeit.co/now](https://zeit.co/now))


### Requirement

Must have the `start` script defined on the `package.json`


### Commands

* [Getting start with Environment Variables | now docs](https://zeit.co/docs/getting-started/environment-variables)

* [Environment Variables and Secrets | now docs](https://zeit.co/docs/features/env-and-secrets)

* [Now's Command Line Interface | now docs](https://zeit.co/docs/features/now-cli)

  * `now` ([Deployment | now docs](https://zeit.co/docs/getting-started/deployment)) - deploy the current folder content to the `now.sh` server.

  * `now alias <ID> <ALIAS>` ([Aliases and Domains | now docs](https://zeit.co/docs/features/aliases)) - define a custom URL

  * `now alias rm <ALIAS>` - remove a given alias

  * `now scale <ID> sfo 1 1` ([Global Scaling | now docs](https://zeit.co/docs/features/scaling)) - make sure to have only one instance of deployment

  * `now remove <ID>` - ([Deployment Inactivity | now docs](https://zeit.co/docs/deployment-types/node#deployment-inactivity)) remove the given instance by its <ID>


### Deployment steps

1 - `now -e MODE=production` - This commmand will give to you the `<ID>` of the deployed instance.

2 - `now alias <ID> <ALIAS>`

3 - `now scale <ID> sfo 1 1`
  

### Re-deployment steps

1 - `now list` - copy the `<OLD_ID>` assigned to the alias `<ALIAS>`

2 - `now -e MODE=production` - will deploy a new instance of the current folder content. This commmand will give to you the `<NEW_ID>` of the deployed instance.

3 - `now alias <NEW_ID> <ALIAS>`

4 - `now remove <OLD_ID>`


## Links

* [Socket.io](https://socket.io/)

  * [[GitHub] socketio / socket.io](https://github.com/socketio/socket.io) - Realtime application framework (Node.JS server)

    * [examples / chat](https://github.com/socketio/socket.io/tree/master/examples/chat)

* [Socket.IO Tutorial With io.js and Express | Program With Erik](http://www.programwitherik.com/socket-io-tutorial-with-node-js-and-express/)

### Dependencies

* [[GitHub] indutny / node-ip](https://github.com/indutny/node-ip) - IP address tools for node.js

* [[GitHub] expressjs / express](https://github.com/expressjs/express)

* [http | Node.js Docs](https://nodejs.org/api/http.html)

* [[GitHub] socketio / socket.io](https://github.com/socketio/socket.io)
