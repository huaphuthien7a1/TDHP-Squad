import { useEffect, FC, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomById } from 'redux/actions/room.action';
import { actFetchChats, actClearChat } from 'redux/actions/chat.action';
import IRootState from 'models/IRootState';
import Spinner from 'components/Spinner';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const DetailRoomPage: FC = () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: any;
    height: any;
  }>(getWindowDimensions());
  const userId = JSON.parse(localStorage.getItem('userId') || '');
  const username = JSON.parse(localStorage.getItem('username') || '');
  const myRef: any = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: 'smooth' });

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [historyMessage, setHistoryMessage] = useState<
    { senderName: string; content: string }[]
  >([]);
  const params: { id: string } = useParams();
  const { isLoading, roomDetail } = useSelector(
    (state: IRootState) => state.roomReducer
  );
  if (roomDetail) {
    console.log('creator id: ', roomDetail.data.creator._id);
    console.log('room id: ', roomDetail.data._id);
  }

  const listChat = useSelector(
    (state: IRootState) => state.chatReducer.listChat
  );
  const isLoadingListChat = useSelector(
    (state: IRootState) => state.chatReducer.isLoading
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    setHistoryMessage(listChat);
  }, [listChat]);
  useEffect(() => {
    dispatch(actGetRoomById(params.id) as any);
    dispatch(actFetchChats(params.id) as any);
  }, []);
  console.log('historymessage', historyMessage);

  useEffect(() => {
    if (myRef.current) executeScroll();
  });

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
      if (index + 1 !== historyMessage.length)
        return (
          <>
            {item.senderName === username ? (
              <li
                className='text-xl text-right p-1 flex justify-end'
                key={index}
              >
                <div
                  className='bg-blue-600 text-white p-3 rounded-xl w-fit'
                  style={{ maxWidth: '45%', overflowWrap: 'break-word' }}
                >
                  <span className=''>{item.content}</span>
                </div>
              </li>
            ) : (
              <li className='text-xl text-left p-1' key={index}>
                <div
                  className='bg-gray-500 text-white p-3 rounded-xl w-fit'
                  style={{ maxWidth: '45%', overflowWrap: 'break-word' }}
                >
                  <span className={`font-bold mr-1  `}>{item.senderName}:</span>
                  {item.content}
                </div>
              </li>
            )}
          </>
        );

      return (
        <>
          {item.senderName === username ? (
            <li
              className='text-xl text-right p-1 flex justify-end'
              key={index}
              ref={myRef}
            >
              <div
                className='bg-blue-600 text-white p-3 rounded-xl w-fit'
                style={{ maxWidth: '45%', overflowWrap: 'break-word' }}
              >
                <span className=''>{item.content}</span>
              </div>
            </li>
          ) : (
            <li className='text-xl text-left p-1 ' key={index} ref={myRef}>
              <div
                className='bg-gray-500 text-white p-3 rounded-xl w-fit'
                style={{ maxWidth: '45%', overflowWrap: 'break-word' }}
              >
                <span className={`font-bold mr-1  `}>{item.senderName}:</span>
                {item.content}
              </div>
            </li>
          )}
        </>
      );
    });

  const handleClearChat = () => {
    actClearChat(roomDetail.data._id)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          imageWidth: '400',
          imageHeight: '100',
          backdrop: 'none',
          showCloseButton: true,
          icon: 'success',
          title: res.data.msg || 'Clear successfully',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        dispatch(actFetchChats(params.id) as any);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        Swal.fire({
          imageWidth: '400',
          imageHeight: '100',
          backdrop: 'none',
          showCloseButton: true,
          icon: 'error',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
      });
  };
  if (isLoadingListChat || isLoading) return <Spinner />;
  return (
    <>
      <div className='flex justify-between pb-3'>
        <h1 className='text-4xl font-bold mb-4'>Room chat</h1>
        {roomDetail && roomDetail.data.creator._id === userId && (
          <button
            onClick={handleClearChat}
            className='px-4 py-2.5 block bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Clear room
          </button>
        )}
      </div>
      <div
        style={{
          height: windowDimensions.width < 1024 ? 'calc(100% - 64px)' : '530px',
        }}
        className={`flex flex-col justify-between`}
      >
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
            className='w-full border-2 p-3 '
          />
          <input
            type='submit'
            id='chat-submit'
            value='Send'
            className='cursor-pointer p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          />
          <i className='fa-solid fa-paper-plane-top'></i>
        </form>
      </div>
    </>
  );
};

export default DetailRoomPage;
