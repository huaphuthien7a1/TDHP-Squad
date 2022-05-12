import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
const Navbar = () => {
  const [username, setUserName] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);
  useEffect(() => {
    const usernameJSON = localStorage.getItem("username");
    if (usernameJSON) setUserName(JSON.parse(usernameJSON));
  }, []);

  useEffect(() => {
    const isTeacherJSON = localStorage.getItem("isTeacher");
    if (isTeacherJSON) setIsTeacher(JSON.parse(isTeacherJSON));
  }, []);
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleClick = (e: any) => {
      const currentDropdown = e.target.closest("[data-dropdown]");
      if (currentDropdown) {
        setIsShow((pre) => !pre);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("isTeacher");
    localStorage.removeItem("isProUser");

    Swal.fire({
      imageWidth: "400",
      imageHeight: "100",
      backdrop: "none",
      showCloseButton: true,
      icon: "success",
      title: "Logout success",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    history.replace("/");
  };
  return (
    <div className="bg-white fixed top-0 left-0 right-0 h-[64px] z-50 flex justify-between items-center px-6 border-b-2">
      <Link to="/">
        <h1 className="text-5xl font-bold text-secondary m-0">TDHP</h1>
      </Link>
      
      <div className="text-lg">
        {!localStorage.getItem("token") ? (
          <>
            <Link
              to="/login"
              className="border-2 border-black px-3 py-1 rounded bg-white hover:bg-slate-100 font-semibold text-center mr-3 text-black hover:text-black"
            >
              <span>Log in</span>
            </Link>
            <Link
              to="/register"
              className="border-2 border-black px-3 py-1 rounded bg-slate-800 hover:bg-slate-900 font-semibold text-center text-white"
            >
              <span>Sign Up</span>
            </Link>
          </>
        ) : (
          <>
            <div
              className="flex items-center relative cursor-pointer"
              data-dropdown
            >
              <i className="fas fa-user p-2 rounded-full border-2 border-black bg-white hover:bg-slate-100 mr-3"></i>
              <p className="italic cursor-pointer m-0">Hi, {username}</p>
              <ul
                className={`absolute ${
                  isTeacher ? "bottom-[-110px]" : "bottom-[-50px]"
                } right-[-15px] text-left rounded-lg shadow-xl border z-[100] bg-white ${
                  isShow ? "block" : "hidden"
                } w-[180px]`}
              >
                {isTeacher && (
                  <li
                    onClick={() => {
                      history.push("/admin/course");
                    }}
                    className="cursor-pointer hover:bg-slate-100 py-2 px-3"
                  >
                    Manage
                  </li>
                )}
                <li
                  onClick={handleLogout}
                  className="cursor-pointer hover:bg-slate-100 py-2 px-3"
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
