import { useEffect, FC, useState } from 'react';
import {
  initiateSocketConnection,
  disconnectSocket,
  subscribeToChat,
} from 'socketio.service';
import { useDispatch, useSelector } from 'react-redux';
import { actGetRoomById } from 'redux/actions/room.action';
import { actFetchChats } from 'redux/actions/chat.action';
import IRootState from 'models/IRootState';
import Spinner from 'components/Spinner';
import { useParams } from 'react-router-dom';
const DetailRoomPage: FC = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { isLoading, roomDetail } = useSelector(
    (state: IRootState) => state.roomReducer
  );
  useEffect(() => {
    dispatch(actGetRoomById(params.id) as any);
    dispatch(actFetchChats(params.id) as any);
  }, []);
  useEffect(() => {
    initiateSocketConnection();
    subscribeToChat((err: any, data: any) => {
      console.log(data);
    });
    return () => {
      disconnectSocket();
    };
  }, []);
  return (
    <div>
      <h1>Real-time chat app</h1>
      <ul id='show-chat'></ul>
      <form action='' id='chat-form'>
        <input type='text' id='chat-message' placeholder='Enter your message' />
        <input type='submit' id='chat-submit' value='Send' />
      </form>
    </div>
  );
};

export default DetailRoomPage;
