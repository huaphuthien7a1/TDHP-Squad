import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
const Navbar = () => {
  const [username, setUserName] = useState('');
  const [isTeacher, setIsTeacher] = useState(false);
  useEffect(() => {
    const usernameJSON = localStorage.getItem('username');
    if (usernameJSON) setUserName(JSON.parse(usernameJSON));
  }, []);

  useEffect(() => {
    const isTeacherJSON = localStorage.getItem('isTeacher');
    if (isTeacherJSON) setIsTeacher(JSON.parse(isTeacherJSON));
  }, []);
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleClick = (e: any) => {
      const currentDropdown = e.target.closest('[data-dropdown]');
      if (currentDropdown) {
        setIsShow((pre) => !pre);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('isTeacher');
    localStorage.removeItem('isProUser');

    Swal.fire({
      imageWidth: '400',
      imageHeight: '100',
      backdrop: 'none',
      showCloseButton: true,
      icon: 'success',
      title: 'Logout success',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    history.replace('/');
  };
  return (
    <div className='bg-white fixed top-0 left-0 right-0 h-[64px] z-50 flex justify-between items-center px-6 border-b-2'>
      <Link to='/'>
        <h1 className='text-5xl font-bold text-secondary'>TDHP</h1>
      </Link>
      <div className='flex justify-center'>
        <div className='xl:w-96'>
          <div className='input-group relative flex items-stretch w-full'>
            <input
              type='search'
              className='rounded-l-lg form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
            <button
              className='rounded-r-lg btn inline-block px-6 py-2.5 bg-slate-800 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-slate-900 hover:shadow-lg focus:bg-slate-900  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-700 active:shadow-lg transition duration-150 ease-in-out flex items-center'
              type='button'
              id='button-addon2'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='search'
                className='w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className='text-lg'>
        {!localStorage.getItem('token') ? (
          <>
            <Link
              to='/login'
              className='border-2 border-black px-3 py-1 rounded bg-white hover:bg-slate-100 font-semibold text-center mr-3'
            >
              <span>Log in</span>
            </Link>
            <Link
              to='/register'
              className='border-2 border-black px-3 py-1 rounded bg-slate-800 hover:bg-slate-900 font-semibold text-center text-white'
            >
              <span>Sign Up</span>
            </Link>
          </>
        ) : (
          <>
            <div
              className='flex items-center relative cursor-pointer'
              data-dropdown
            >
              <i className='fas fa-user p-2 rounded-full border-2 border-black bg-white hover:bg-slate-100 mr-3'></i>
              <p className='italic cursor-pointer'>Hi, {username}</p>
              <ul
                className={`absolute ${
                  isTeacher ? 'bottom-[-150px]' : 'bottom-[-50px]'
                } right-[-15px] text-left rounded-lg shadow-xl border z-[100] bg-white ${
                  isShow ? 'block' : 'hidden'
                } w-[180px]`}
              >
                {isTeacher && (
                  <li
                    onClick={() => {
                      history.push('/admin/course');
                    }}
                    className='cursor-pointer hover:bg-slate-100 py-2 px-3'
                  >
                    Manage your Courses, Learning Path
                  </li>
                )}
                <li
                  onClick={handleLogout}
                  className='cursor-pointer hover:bg-slate-100 py-2 px-3'
                >
                  Logout
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
