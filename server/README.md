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

### now requirement

Must have the `start` script defined on the `package.json`

### now commands

* deploy to the server: `now` ([Deployment | now docs](https://zeit.co/docs/getting-started/deployment))

* define a alias to the deployed instance: `now <SOURCE URL | ID> react-socket-simple-chat-server` ([Aliases and Domains | now docs](https://zeit.co/docs/features/aliases))

* make sure to have only one instance of the server: `now scale <SOURCE URL | ID> sfo 1 1` ([Global Scaling | now docs](https://zeit.co/docs/features/scaling))


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
