import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCourses } from "redux/actions/course.action";

const CoursesPage: FC = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const { isLoading, listCourse } = useSelector(
    (state: any) => state.courseReducer
  );
  useEffect(() => {
    dispatch(actFetchCourses() as any);
  }, []);
  useEffect(() => {
    setCourses(listCourse);
  }, [listCourse]);
  const renderCourses = () => {
    return courses.map((course: any) => {
      return (
        <div className="mb-6 lg:mb-0" key={course._id}>
          <div className="relative block bg-white rounded-lg shadow-lg">
            <div className="flex">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src={course.thumbnail.url} className="w-full" />
                <Link
                  to={{
                    pathname: `/course/${course._id}`,
                    state: { courseId: course._id },
                  }}
                >
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  />
                </Link>
              </div>
            </div>
            <div className="p-6">
              <Link
                to={{
                  pathname: `/course/${course._id}`,
                  state: { courseId: course._id },
                }}
              >
                <h5 className="font-bold text-lg mb-3">{course.name}</h5>
              </Link>

              <p className="mb-4 pb-2">{course.description}</p>
              <a
                href={`/course/${course._id}`}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View the course
              </a>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <h1 className="text-3xl mt-4 font-bold mb-10">COURSES</h1>
      <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12 xl:gap-x-12">
        {renderCourses()}
      </div>
    </>
  );
};

export default CoursesPage;
