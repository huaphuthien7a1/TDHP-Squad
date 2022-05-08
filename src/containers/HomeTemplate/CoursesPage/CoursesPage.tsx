import { FC } from 'react';
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

const CoursesPage: FC = () => {
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
  return (
    <>
      <h1 className='text-3xl mt-4 font-bold'>COURSES</h1>
      <div className='grid grid-cols-4 gap-4 mt-4'>{renderCourses()}</div>
    </>
  );
};

export default CoursesPage;
