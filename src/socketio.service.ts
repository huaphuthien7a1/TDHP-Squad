import { DefaultEventsMap } from '@socket.io/component-emitter';
import { io, Socket } from 'socket.io-client';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const initiateSocketConnection = () => {
  socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`);
  console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};
export const subscribeToChat = (cb: any) => {
  socket.emit('my message', 'Hello there from React.');

  socket.on('my broadcast', (msg) => {
    return cb(null, msg);
  });
};
