import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarAdminItems: { url: string; content: string }[] = [
  { url: '/admin/course', content: 'Manage courses' },
  { url: '/admin/learning-path', content: 'Manage learning paths' },
];

const SideBarAdmin: FC = () => {
  let location = useLocation();
  const renderSidebarAdminItems = () =>
    sidebarAdminItems.map((item) => (
      <Link to={item.url} key={item.content}>
        <div
          className={`p-3 border ${
            location.pathname.indexOf(item.url) !== -1
              ? 'bg-slate-200'
              : 'bg-white'
          } hover:bg-slate-100 ease-out duration-300 active:bg-slate-200 text-black`}
        >
          {item.content}
        </div>
      </Link>
    ));
  return (
    <div className='mt-[63px] w-[200px] fixed top-0 bottom-0 left-0 bg-white border'>
      {renderSidebarAdminItems()}
    </div>
  );
};

export default SideBarAdmin;
