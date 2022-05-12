import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchCourses,
  actFetchSearchCourses,
} from "redux/actions/course.action";
import IRootState from "models/IRootState";
import Spinner from "components/Spinner";
import SearchBar from "components/SearchBar";
import { ChildProps } from "postcss";

const CoursesPage: FC = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  const { isLoading, listCourse } = useSelector((state: IRootState) => {
    return state.courseReducer;
  });
  useEffect(() => {
    dispatch(actFetchCourses() as any);
  }, []);
  useEffect(() => {
    setCourses(listCourse);
  }, [listCourse]);

  const getSearchValue = (data: any): any => {
    if (data.value === "") {
      dispatch(actFetchCourses() as any);
    } else {
      dispatch(actFetchSearchCourses(data.value) as any);
    }
  };

  const renderCourses = () => {
    if (isLoading) return <Spinner />;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 xl:gap-x-12">
        {courses.map((course: any) => {
          return (
            <div
              className="mb-6 lg:mb-0 hover:-translate-y-2 ease-out duration-300"
              key={course._id}
            >
              <div className="relative block bg-white rounded-lg shadow-lg">
                <div className="flex">
                  <div
                    className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img src={course.thumbnail.url} className="w-full" alt="" />
                    <Link
                      to={{
                        pathname: `/course/${course._id}`,
                        state: { course: course },
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
                      pathname: `/course/${course._id}`,
                      state: { course: course },
                    }}
                  >
                    <h5 className="font-bold text-lg mb-3">{course.name}</h5>
                  </Link>

                  <p className="mb-4 pb-2">{course.description}</p>
                  <Link
                    to={{
                      pathname: `/course/${course._id}`,
                      state: { course: course },
                    }}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    View the course
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <SearchBar getSearchValue={getSearchValue} />
      <div className="flex flex-row items-center mt-4 mb-10 justify-between">
        <h1 className="text-3xl font-bold mr-3">COURSES</h1>
      </div>
      <div>{renderCourses()}</div>
    </>
  );
};

export default CoursesPage;
