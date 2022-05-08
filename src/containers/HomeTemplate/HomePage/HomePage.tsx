import Banner from 'components/Banner';
import { Link } from 'react-router-dom';

const pakeCourses = [
  {
    name: 'course 1',
    description: 'Course 1 description',
    views: 10,
    rating: 5,
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
    pdf: '',
    video: '',
  },
  {
    name: 'course 2',
    description: 'Course 2 description',
    views: 10,
    rating: 5,
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
    pdf: '',
    video: '',
  },
  {
    name: 'course 3',
    description: 'Course 3 description',
    views: 10,
    rating: 5,
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
    pdf: '',
    video: '',
  },
  {
    name: 'course 4',
    description: 'Course 5 description',
    views: 10,
    rating: 5,
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
    pdf: '',
    video: '',
  },
  {
    name: 'course 1',
    description: 'Course 1 description',
    views: 10,
    rating: 5,
    thumbnail:
      'https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=',
    pdf: '',
    video: '',
  },
];
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
  const renderCourses = () => {
    return pakeCourses.map((course) => {
      return (
        <Link to={`/course/${course.name}`}>
          <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
              className='w-full'
              src={course.thumbnail}
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
    return pakeLearningPaths.map((learningPath) => {
      return (
        <Link to={`/learning-path/${learningPath.name}`}>
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
