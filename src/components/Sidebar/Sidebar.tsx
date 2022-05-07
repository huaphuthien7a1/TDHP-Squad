import { Link, useLocation } from 'react-router-dom';

const sidebarItems: { url: string; content: string }[] = [
  { url: '/course', content: 'Courses' },
  { url: '/learning-path', content: 'Learning Paths' },
  { url: '/room', content: 'Rooms' },
  { url: '/competition', content: 'Competitions' },
];

const Sidebar = () => {
  let location = useLocation();
  console.log(location);
  const renderSidebarItems = () =>
    sidebarItems.map((item) => (
      <Link to={item.url} key={item.content}>
        <div
          className={`py-3 my-1 mx-3 px-3 ${
            location.pathname.indexOf(item.url) !== -1
              ? 'bg-slate-200'
              : 'bg-white'
          } hover:bg-slate-200 rounded-xl`}
        >
          {item.content}
        </div>
      </Link>
    ));
  return (
    <div className='fixed top-1/2 -translate-y-1/2 left-0  w-[160px] border-2 flex flex-col py-4 rounded-r-xl text-lg'>
      {renderSidebarItems()}
    </div>
  );
};

export default Sidebar;
