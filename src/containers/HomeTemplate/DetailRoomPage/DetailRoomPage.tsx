import { useEffect, FC, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomById } from 'redux/actions/room.action';
import { actFetchChats } from 'redux/actions/chat.action';
import IRootState from 'models/IRootState';
import Spinner from 'components/Spinner';
import { useParams } from 'react-router-dom';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const initiateSocketConnection = () => {
  socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`);
  console.log(`Connecting socket...`);
};

const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

const DetailRoomPage: FC = () => {
  const userId = JSON.parse(localStorage.getItem('userId') || '');
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const params: { id: string } = useParams();
  const { isLoading, roomDetail } = useSelector(
    (state: IRootState) => state.roomReducer
  );
  const listChat = useSelector(
    (state: IRootState) => state.chatReducer.listChat
  );
  const isLoadingListChat = useSelector(
    (state: IRootState) => state.chatReducer.isLoading
  );

  useEffect(() => {
    setData(listChat);
  }, [listChat]);
  useEffect(() => {
    dispatch(actGetRoomById(params.id) as any);
    dispatch(actFetchChats(params.id) as any);
  }, []);
  useEffect(() => {
    initiateSocketConnection();
    socket.on('from-server', (data: any) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const sendMessage = (content: string) => {
    socket.emit('from-client', {
      content,
      senderId: userId,
      roomId: roomDetail,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
  };
  const renderMessage = () =>
    (data || []).map((item: any) => {
      return (
        <li className='text-xl'>
          <span className='font-bold'>{item.senderName}</span>: {item.content}
        </li>
      );
    });
  if (isLoadingListChat || isLoading) return <Spinner />;
  return (
    <div>
      <h1>Real-time chat app</h1>
      <ul id='show-chat'>{renderMessage()}</ul>
      <form action='' id='chat-form' onSubmit={handleSubmit}>
        <input
          value={message}
          type='text'
          id='chat-message'
          placeholder='Enter your message'
          onChange={handleChange}
        />
        <input type='submit' id='chat-submit' value='Send' />
      </form>
    </div>
  );
};

export default DetailRoomPage;
