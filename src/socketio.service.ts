import { DefaultEventsMap } from '@socket.io/component-emitter';
import { io, Socket } from 'socket.io-client';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

export const initiateSocketConnection = () => {
  socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`, {
    transports: ['websocket', 'polling', 'flashsocket'],
  });
  console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};
export const sendMess = (content: string, senderId: string, roomId: string) => {
  socket.emit('from-client', {
    content,
    senderId,
    roomId,
  });
};
