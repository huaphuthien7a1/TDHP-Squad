import { useEffect, FC, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';

import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomById } from 'redux/actions/room.action';
import { actFetchChats } from 'redux/actions/chat.action';
import IRootState from 'models/IRootState';
import Spinner from 'components/Spinner';
import { useParams } from 'react-router-dom';

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const DetailRoomPage: FC = () => {
  const userId = JSON.parse(localStorage.getItem('userId') || '');
  const username = JSON.parse(localStorage.getItem('username') || '');

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [historyMessage, setHistoryMessage] = useState<
    { senderName: string; content: string }[]
  >([]);
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
    setHistoryMessage(listChat);
  }, [listChat]);
  useEffect(() => {
    dispatch(actGetRoomById(params.id) as any);
    dispatch(actFetchChats(params.id) as any);
  }, []);
  console.log('historymessage', historyMessage);

  useEffect(() => {
    socket = io(`${process.env.REACT_APP_SOCKET_ENDPOINT}`, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
    socket.on(
      'from-server',
      (data: { senderName: string; content: string }) => {
        setHistoryMessage((pre) => [...pre, data]);
      }
    );
    return () => {
      if (socket) socket.disconnect();
    };
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(message);

    socket.emit('from-client', {
      content: message,
      senderId: userId,
      roomId: params.id,
    });
    setMessage('');
  };

  const renderMessage = () =>
    historyMessage.map((item: any, index): JSX.Element => {
      return (
        <>
          {item.senderName === username ? (
            <li className='text-xl text-right p-3 ' key={index}>
              <span className='bg-blue-600 text-white p-3 rounded-xl'>
                <span className='mr-2'>{item.content}</span>
                <span className={`font-bold mr-2  `}>:{item.senderName}</span>
              </span>
            </li>
          ) : (
            <li className='text-xl text-left p-3 ' key={index}>
              <span className='bg-gray-500 text-white p-3 rounded-xl'>
                <span className={`font-bold mr-2  `}>{item.senderName}:</span>
                <span className='ml-2'>{item.content}</span>
              </span>
            </li>
          )}
        </>
      );
    });

  if (isLoadingListChat || isLoading) return <Spinner />;
  return (
    <div>
      <h1 className='text-4xl font-bold mb-4'>Room chat</h1>
      <div className={`h-[430px] flex flex-col justify-between`}>
        <div className={` overflow-y-scroll h-full flex flex-col justify-end`}>
          <ul id='show-chat' className='h-full'>
            {renderMessage()}
          </ul>
        </div>
        <form
          action=''
          id='chat-form'
          onSubmit={handleSubmit}
          className='flex mt-2'
        >
          <input
            value={message}
            type='text'
            id='chat-message'
            placeholder='Enter your message'
            onChange={handleChange}
            className='w-full border-2 p-3'
          />
          <input
            type='submit'
            id='chat-submit'
            value='Send'
            className='cursor-pointer p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          />
        </form>
      </div>
    </div>
  );
};

export default DetailRoomPage;