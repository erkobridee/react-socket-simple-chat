const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const ip = require('ip');

let ipAddress = 'localhost'; // will works only to the local host
try {
  // will enable to the server to be accessed from the network
  ipAddress = ip.address();
} catch( err ){
  console.err( err );
}

const SERVER_PORT = 3001;

//----------------------------------------------------------------------------//
// CORS configs - allows access from the other machines beyond the localhost

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

//----------------------------------------------------------------------------//
// Socket IO

const IO_EVENT_CONNECTION = 'connection';
const IO_EVENT_MESSAGE = 'message';
const IO_EVENT_DISCONNECT = 'disconnect';

let connectionsCounter = 1;

const logConnections = () =>
  console.log( `Socket IO connections: ${connectionsCounter}` );

io.on( IO_EVENT_CONNECTION, socket => {
  logConnections();
  connectionsCounter++;

  socket.on( IO_EVENT_MESSAGE, message => {
    console.log(
      'Socket IO server received the message: ',
      JSON.stringify( message )
    );

    // return the message to the sender
    socket.emit( IO_EVENT_MESSAGE, message );

    // send the message to the others listeners
    socket.broadcast.emit( IO_EVENT_MESSAGE, message );
  });

  socket.on( IO_EVENT_DISCONNECT, () => {
    connectionsCounter--;
    logConnections();
  })
});

//----------------------------------------------------------------------------//
// start the server

http.listen( SERVER_PORT, ipAddress, () => (
  console.log(
    '\n',
    `Socket IO server is running at ${ipAddress}:${SERVER_PORT}`,
    '\n',
    'Please remember to update the .env file, and if needed restart your dev. environment.',
    '\n'
  )
))
