import Banner from "components/Banner";
import Spinner from "components/Spinner";
import { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actFetchCourses } from "redux/actions/course.action";
import { actFetchLearningPaths } from "redux/actions/learningPath.action";
import IRootState from "models/IRootState";
import { motion } from "framer-motion";
import { RatingStar } from "rating-star";
const HomePage = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [learningPaths, setLearningPaths] = useState([]);
  const isLoadingCourses = useSelector(
    (state: IRootState) => state.courseReducer.isLoading
  );
  const listCourse = useSelector(
    (state: IRootState) => state.courseReducer.listCourse
  );
  const isLoadingLearningPaths = useSelector(
    (state: IRootState) => state.learningPathReducer.isLoading
  );
  const listLearningPath = useSelector(
    (state: IRootState) => state.learningPathReducer.listLearningPath
  );
  useEffect(() => {
    dispatch(actFetchCourses() as any);
    dispatch(actFetchLearningPaths() as any);
  }, []);
  useEffect(() => {
    setCourses(listCourse);
  }, [listCourse]);
  useEffect(() => {
    setLearningPaths(listLearningPath);
  }, [listLearningPath]);

  const renderCourses = () => {
    if (isLoadingCourses) return <Spinner />;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {courses.slice(0, 4).map((course: any, index) => {
          return (
            <Link
              to={{
                pathname: `/course/${course._id}`,
                state: { course: course },
              }}
              key={index}
            >
              <div className="text-black max-w-sm rounded overflow-hidden shadow-lg translate-y-0 hover:-translate-y-2 ease-out duration-300 p-5">
                <img
                  className="w-ful rounded object-cover"
                  src={course.thumbnail.url}
                  alt="Sunset in the mountains"
                />
                <div className="py-4">
                  <div className="font-bold text-xl mb-6">{course.name}</div>
                  {/* <p className='text-gray-700 text-base'>
                    {course.description}
                  </p> */}
                  <div className="flex justify-between mb-1">
                    <div className="font-medium">
                      <i className="far text-secondary fa-graduation-cap"></i>
                      <span className="ml-2">{`${course.videos.length} Lessons`}</span>
                    </div>
                    <RatingStar
                      maxScore={5}
                      id={course._id}
                      rating={course.rating}
                      size={15}
                    />
                  </div>
                  <Link
                    to={{
                      pathname: `/course/${course._id}`,
                      state: { course: course },
                    }}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className=""
                  >
                    <button className="px-4 py-2.5 block bg-secondary text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-darkSecondary hover:shadow-lg focus:bg-darkSecondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkSecondary active:shadow-lg transition duration-150 ease-in-out mx-auto">
                      View the course
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  const renderLearningPaths = () => {
    if (isLoadingLearningPaths) return <Spinner />;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {learningPaths?.slice(0, 8).map((learningPath: any) => {
          return (
            <Link
              to={{
                pathname: `/learning-path/${learningPath._id}`,
                state: { learningPath: learningPath },
              }}
              key={learningPath._id}
            >
              <div className="block bg-gray-200 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 mb-2 shadow-lg translate-y-0 hover:-translate-y-2 ease-out duration-300">
                {learningPath.name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="lg:ml-[-70px] lg:mr-[70px]"
    >
      <Banner />
      <Link to="/course">
        <h1 className="text-3xl mt-4 font-bold">COURSES</h1>
      </Link>
      <div>{renderCourses()}</div>
      <Link to="/course">
        <button className="mx-auto flex justify-center items-center rounded-full px-10 py-3 bg-primary text-white text-xl my-8 font-medium leading-tight uppercase shadow-md hover:bg-darkPrimary hover:shadow-lg focus:bg-darkPrimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkPrimary active:shadow-lg transition duration-150 ease-in-out">
          More Courses
        </button>
      </Link>
      <Link to="/learning-path">
        <h1 className="text-3xl mt-4 font-bold">LEARNING PATH</h1>
      </Link>
      <div>{renderLearningPaths()}</div>
      <Link to="/learning-path">
        <button className="mx-auto flex justify-center items-center rounded-full px-10 py-3 bg-primary text-white text-xl my-8 font-medium leading-tight uppercase shadow-md hover:bg-darkPrimary hover:shadow-lg focus:bg-darkPrimary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-darkPrimary active:shadow-lg transition duration-150 ease-in-out">
          More Learning Paths
        </button>
      </Link>
    </motion.div>
  );
};

export default HomePage;
