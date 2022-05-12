import { FC, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchRooms, actFetchSearchRooms } from "redux/actions/room.action";
import IRootState from "models/IRootState";
import Spinner from "components/Spinner";
import Swal from "sweetalert2";
import { checkUserIsInRoom } from "utils/checkUserIsInRoom";
import { actJoinRoom } from "redux/actions/user.action";
import SearchBar from "components/SearchBar";
import { motion } from "framer-motion";
const RoomsPage: FC = () => {
  const history = useHistory();
  let userId = localStorage.getItem("userId") || "";
  if (userId) userId = JSON.parse(userId);
  const dispatch = useDispatch();
  const [rooms, setRooms] = useState([]);
  const { isLoading, listRoom } = useSelector(
    (state: IRootState) => state.roomReducer
  );
  useEffect(() => {
    dispatch(actFetchRooms() as any);
  }, []);
  useEffect(() => {
    setRooms(listRoom);
  }, [listRoom]);

  const getSearchValue = (data: any): any => {
    if (data.value === "") {
      dispatch(actFetchRooms() as any);
    } else {
      dispatch(actFetchSearchRooms(data.value) as any);
    }
  };

  const handleJoinRoom = async (roomId: string) => {
    if (userId === "") history.push("/login");
    try {
      const res = await actJoinRoom(roomId);
      Swal.fire({
        imageWidth: "400",
        imageHeight: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "success",
        title: "Join chat room successfully!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      history.push(`/room/${roomId}`);
    } catch (error: any) {
      Swal.fire({
        imageWidth: "400",
        imageHeight: "100",
        backdrop: "none",
        showCloseButton: true,
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };
  const renderRooms = () => {
    if (isLoading) return <Spinner />;
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 xl:gap-x-12">
        {rooms.map((room: any, index) => (
          <div
            className="mb-6 lg:mb-0 hover:-translate-y-2 ease-out duration-300"
            key={room._id}
          >
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div className="flex">
                <div
                  className="w-full relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={room.thumbnail.url}
                    className="w-full object-cover"
                  />
                  <Link
                    to={{
                      pathname: `/room/${room._id}`,
                      state: { courseId: room._id },
                    }}
                  >
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{
                        backgroundColor: "rgba(251, 251, 251, 0.15)",
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <Link
                  to={{
                    pathname: `/room/${room._id}`,
                    state: { courseId: room._id },
                  }}
                >
                  <h5 className="font-bold text-lg mb-3">{room.name}</h5>
                </Link>

                <p className="mb-4 pb-2">Member: {room.members.length}</p>
                {checkUserIsInRoom(userId, room.members) ? (
                  <div className="flex items-center justify-center">
                    <a
                      href={`/room/${room._id}`}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="inline-block text-center mx-auto px-6 py-2.5 bg-secondary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-darkSecondary hover:shadow-lg focus:bg-darkSecondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkSecondary active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Join chat room
                    </a>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <p
                      onClick={() => {
                        handleJoinRoom(room._id);
                      }}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      className="cursor-pointer text-center inline-block px-4 py-2.5 bg-secondary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-darkSecondary hover:shadow-lg focus:bg-darkSecondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkSecondary active:shadow-lg transition duration-150 ease-in-out mb-0"
                    >
                      Register for chat room
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <SearchBar getSearchValue={getSearchValue} />
      <h1 className="text-3xl mt-4 font-bold mb-10">ROOMS</h1>
      <div>{renderRooms()}</div>
    </motion.div>
  );
};

export default RoomsPage;
