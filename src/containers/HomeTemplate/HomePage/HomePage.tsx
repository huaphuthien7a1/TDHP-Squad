import Banner from 'components/Banner';
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchCourses } from 'redux/actions/course.action';
import { actFetchLearningPaths } from 'redux/actions/learningPath.action';
import IRootState from 'models/IRootState';

const pakeLearningPaths = [
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
  {
    name: 'learning path 1',
    rating: 5,
    isProCourse: false,
    courses: ['course 1', 'course 2'],
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
  },
];

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
  console.log('loading', isLoadingCourses || isLoadingLearningPaths);
  console.log(listLearningPath);

  const renderCourses = () => {
    return courses.map((course: any, index) => {
      return (
        <Link to={`/course/${course._id}`} key={index}>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src={course.thumbnail.url}
              alt='Sunset in the mountains'
            />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{course.name}</div>
              <p className='text-gray-700 text-base'>{course.description}</p>
            </div>
          </div>
        </Link>
      );
    });
  };
  const renderLearningPaths = () => {
    return learningPaths?.map((learningPath: any) => {
      return (
        <Link to={`/learning-path/${learningPath._id}`} key={learningPath._id}>
          <div className='block bg-gray-200 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 mb-2 shadow-lg'>
            {learningPath.name}
          </div>
        </Link>
      );
    });
  };
  return (
    <div>
      <Banner />
      <Link to='/course'>
        <h1 className='text-3xl mt-4 font-bold'>COURSES</h1>
      </Link>
      <div className='grid grid-cols-4 gap-4 mt-4'>{renderCourses()}</div>
      <Link to='/learning-path'>
        <h1 className='text-3xl mt-4 font-bold'>LEARNING PATH</h1>
      </Link>

      <div className='grid grid-cols-4 gap-4 mt-4'>{renderLearningPaths()}</div>
    </div>
  );
};

export default HomePage;
