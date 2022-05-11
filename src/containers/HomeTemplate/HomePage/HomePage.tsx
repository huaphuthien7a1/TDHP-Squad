import Banner from 'components/Banner';
import Spinner from 'components/Spinner';
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchCourses } from 'redux/actions/course.action';
import { actFetchLearningPaths } from 'redux/actions/learningPath.action';
import IRootState from 'models/IRootState';

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
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {courses.map((course: any, index) => {
          return (
            <Link
              to={{
                pathname: `/course/${course._id}`,
                state: { course: course },
              }}
              key={index}
            >
              <div className='text-black max-w-sm rounded overflow-hidden shadow-lg translate-y-0 hover:-translate-y-2 ease-out duration-300'>
                <img
                  className='w-full'
                  src={course.thumbnail.url}
                  alt='Sunset in the mountains'
                />
                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{course.name}</div>
                  <p className='text-gray-700 text-base'>
                    {course.description}
                  </p>
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
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {learningPaths?.map((learningPath: any) => {
          return (
            <Link
              to={{
                pathname: `/learning-path/${learningPath._id}`,
                state: { learningPath: learningPath },
              }}
              key={learningPath._id}
            >
              <div className='block bg-gray-200 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 mb-2 shadow-lg translate-y-0 hover:-translate-y-2 ease-out duration-300'>
                {learningPath.name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <Banner />
      <Link to='/course'>
        <h1 className='text-3xl mt-4 font-bold'>COURSES</h1>
      </Link>
      <div className='min-h-[350px]'>{renderCourses()}</div>

      <Link to='/learning-path'>
        <h1 className='text-3xl mt-4 font-bold'>LEARNING PATH</h1>
      </Link>

      <div className='min-h-[350px]'>{renderLearningPaths()}</div>
    </div>
  );
};

export default HomePage;
