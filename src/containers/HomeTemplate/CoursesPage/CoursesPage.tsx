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
        <div className='mb-6 lg:mb-0'>
          <div className='relative block bg-white rounded-lg shadow-lg'>
            <div className='flex'>
              <div
                className='relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                <img src={course.thumbnail} className='w-full' />
                <Link to={`/course/${course.name}`}>
                  <div
                    className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                  />
                </Link>
              </div>
            </div>
            <div className='p-6'>
              <Link to={`/course/${course.name}`}>
                <h5 className='font-bold text-lg mb-3'>{course.name}</h5>
              </Link>

              <p className='mb-4 pb-2'>{course.description}</p>
              <a
                href={`/course/${course.name}`}
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
                className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
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
      <h1 className='text-3xl mt-4 font-bold mb-10'>COURSES</h1>
      <div className='grid lg:grid-cols-3 gap-x-6 gap-y-12 xl:gap-x-12'>
        {renderCourses()}
      </div>
    </>
  );
};

export default CoursesPage;
