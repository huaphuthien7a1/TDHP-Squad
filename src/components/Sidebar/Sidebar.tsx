import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { setConstantValue } from 'typescript';
import { motion } from 'framer-motion';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const variants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const sidebarItems: { url: string; content: string; iconClass: string }[] = [
  { url: '/course', content: 'Courses', iconClass: 'far fa-books' },
  {
    url: '/learning-path',
    content: 'Learning Paths',
    iconClass: 'far fa-compass',
  },
  { url: '/room', content: 'Rooms', iconClass: 'far fa-comments-alt' },
  { url: '/competition', content: 'Competitions', iconClass: 'far fa-sword' },
];

const Sidebar: FC = () => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: any;
    height: any;
  }>(getWindowDimensions());
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setHiddenSidebar(!hiddenSidebar);
  };

  let location = useLocation();
  const renderSidebarItems = () =>
    sidebarItems.map((item) => (
      <Link to={item.url} key={item.content}>
        <div
          className={`py-3 my-1 mx-3 px-3 ${
            location.pathname.indexOf(item.url) !== -1
              ? 'bg-secondary text-white'
              : 'bg-white text-secondary'
          } hover:bg-slate-100 rounded-xl ease-out duration-300 active:bg-slate-200`}
        >
          {hiddenSidebar ? <i className={item.iconClass}></i> : item.content}
        </div>
      </Link>
    ));
  const renderSidebarItemsMobile = () =>
    sidebarItems.map((item) => (
      <Link to={item.url} key={item.content}>
        <div
          className={`py-3 my-1 mx-3 px-3 ${
            location.pathname.indexOf(item.url) !== -1
              ? 'bg-secondary text-white'
              : 'bg-white text-secondary'
          } hover:bg-slate-100 rounded-xl ease-out duration-300 active:bg-slate-200`}
        >
          <i className={item.iconClass}></i> <span>{item.content}</span>
        </div>
      </Link>
    ));
  if (windowDimensions.width > 1024)
    return (
      <motion.div
        initial={{ x: -100, y: -100 }}
        animate={{ x: 0, y: -100 }}
        transition={{ delay: 0.2, type: 'tween' }}
        className={`z-50 bg-white fixed top-1/2 -translate-y-1/2 left-0  ${
          hiddenSidebar ? 'w-auto' : 'w-[160px]'
        } flex flex-col py-4 rounded-r-xl text-lg drop-shadow border ease-out duration-300`}
      >
        {renderSidebarItems()}
        <div
          className='z-40 absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-2 py-4 drop-shadow border border-l-0 rounded-r-lg cursor-pointer bg-white'
          onClick={handleToggleSidebar}
        >
          <i className={`far fa-angle-${hiddenSidebar ? 'right' : 'left'}`}></i>
        </div>
      </motion.div>
    );
  return (
    <motion.div
      initial={{ x: '-100%', y: -120 }}
      animate={!hiddenSidebar ? 'open' : 'closed'}
      variants={variants}
      transition={{ delay: 0.2, type: 'tween' }}
      className={`z-50 bg-white fixed top-1/2 -translate-y-full left-0  ${
        hiddenSidebar ? 'w-[160px]' : 'w-[160px]'
      } flex flex-col py-4 rounded-r-xl text-lg drop-shadow border ease-out duration-300`}
    >
      {renderSidebarItemsMobile()}
      <div
        className='z-40 absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-2 py-4 drop-shadow border border-l-0 rounded-r-lg cursor-pointer bg-white'
        onClick={handleToggleSidebar}
      >
        <i className={`far fa-angle-${hiddenSidebar ? 'right' : 'left'}`}></i>
      </div>
    </motion.div>
  );
};

export default Sidebar;
