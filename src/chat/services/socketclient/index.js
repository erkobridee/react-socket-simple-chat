import { mockSocket } from 'chat/constants';
import mockClient from './mockClient';
import socketClient from './socketClient';

const client = mockSocket ? mockClient : socketClient.get();

export default client;
