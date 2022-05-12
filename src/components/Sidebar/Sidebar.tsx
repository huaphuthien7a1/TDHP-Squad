import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setConstantValue } from "typescript";
import { motion } from "framer-motion";
const sidebarItems: { url: string; content: string; iconClass: string }[] = [
  { url: "/course", content: "Courses", iconClass: "far fa-books" },
  {
    url: "/learning-path",
    content: "Learning Paths",
    iconClass: "far fa-compass",
  },
  { url: "/room", content: "Rooms", iconClass: "far fa-comments-alt" },
  { url: "/competition", content: "Competitions", iconClass: "far fa-sword" },
];

const Sidebar = () => {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

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
              ? "bg-slate-200"
              : "bg-white"
          } hover:bg-slate-100 rounded-xl ease-out duration-300 active:bg-slate-200 text-black`}
        >
          {hiddenSidebar ? <i className={item.iconClass}></i> : item.content}
        </div>
      </Link>
    ));
  return (
    <motion.div
      initial={{ x: -100, y: -100 }}
      animate={{ x: 0, y: -100 }}
      transition={{ delay: 0.2, type: 'tween' }}
      className={`z-50 bg-white fixed top-1/2 -translate-y-1/2 left-0  ${
        hiddenSidebar ? "w-auto" : "w-[160px]"
      } flex flex-col py-4 rounded-r-xl text-lg drop-shadow border ease-out duration-300`}
    >
      {renderSidebarItems()}
      <div
        className="z-40 absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-2 py-4 drop-shadow border border-l-0 rounded-r-lg cursor-pointer bg-white"
        onClick={handleToggleSidebar}
      >
        <i className={`far fa-angle-${hiddenSidebar ? "right" : "left"}`}></i>
      </div>
    </motion.div>
  );
};

export default Sidebar;
