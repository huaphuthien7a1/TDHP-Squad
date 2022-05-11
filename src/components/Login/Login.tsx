import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import './Responsive.scss';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { URL_SIGN_IN } from 'redux/urlAPI';
import Swal from 'sweetalert2';
import jwt from 'jwt-decode';

const Login: FC = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const loginSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: 'POST',
        url: URL_SIGN_IN,
        data: { ...user },
      });
      localStorage.setItem('token', JSON.stringify(res.data.token));
      const accountInfo: {
        userId: string;
        username: string;
        role: { isTeacher: boolean; isProUser: boolean };
        exp: number;
        iat: number;
      } = jwt(res.data.token.accessToken);
      localStorage.setItem('userId', JSON.stringify(accountInfo.userId));
      localStorage.setItem('username', JSON.stringify(accountInfo.username));
      localStorage.setItem(
        'isTeacher',
        JSON.stringify(accountInfo.role.isTeacher)
      );
      localStorage.setItem(
        'isProUser',
        JSON.stringify(accountInfo.role.isProUser)
      );

      Swal.fire({
        imageWidth: '400',
        imageHeight: '100',
        backdrop: 'none',
        showCloseButton: true,
        icon: 'success',
        title: res.data.msg,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      history.replace('/');
    } catch (error: any) {
      Swal.fire({
        imageWidth: '400',
        imageHeight: '100',
        backdrop: 'none',
        showCloseButton: true,
        icon: 'error',
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };

  return (
    <div className='signup w-full bg-white rounded-[3rem] flex justify-between'>
      <div className='signup__left w-[calc(50%-2rem)] py-16 px-[4.5rem]'>
        <h1 className='signup__title text-6xl font-bold text-[#263238] mb-9'>
          Login
        </h1>
        <h2 className='signup__desc text-base font-semibold relative pl-32 text-primary mb-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-28 before:h-[2px] before:rounded-sm before:bg-primary '>
          Enjoy the life
        </h2>
        <form
          onSubmit={loginSubmit}
          autoComplete='off'
          id='signup__form'
          className='signup__form'
        >
          <div className='signup__information flex flex-wrap justify-between'>
            <div className='signup__email w-full mb-4'>
              <label
                htmlFor='username'
                className='signup__label block text-lg color-[#263238] cursor-pointer mb-4'
              >
                User name
              </label>
              <input
                type='text'
                id='username'
                placeholder=''
                className='signup__input w-full p-4 text-lg border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-primary'
                onChange={onChangeInput}
                required
              />
            </div>
            <div className='signup__password w-full mb-4'>
              <label
                htmlFor='password'
                className='signup__label block text-lg color-[#263238] cursor-pointer mb-4'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                placeholder=''
                className='signup__input w-full p-4 text-lg border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-primary'
                onChange={onChangeInput}
                required
              />
            </div>
          </div>
          <button
            type='submit'
            form='signup__form'
            value='Submit'
            className='signup__button w-16 h-16 my-4 flex items-center justify-center bg-primary text-white border-0 rounded-3xl shadow-md cursor-pointer'
          >
            <i className='fas fa-arrow-right'></i>
          </button>
        </form>
        <div className='signup__redirect text-lg leading-relaxed'>
          Create a new account?&nbsp;
          <Link to='/register' className='text-primary'>
            Register
          </Link>
        </div>
      </div>
      <div className='signup__right w-[calc(50%-2rem)] pr-[4.5rem] flex items-center'>
        <img
          src='./Startup life-pana.svg'
          alt=''
          className='block w-full object-cover'
        />
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
