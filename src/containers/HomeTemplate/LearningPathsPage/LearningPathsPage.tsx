import { FC } from 'react';
import { Link } from 'react-router-dom';

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

const LearningPathsPage: FC = () => {
  const renderLearningPaths = () => {
    return pakeLearningPaths.map((learningPath) => {
      return (
        <Link to={`/learning-path/${learningPath.name}`}>
          <div className='max-w-sm w-full lg:max-w-full lg:flex my-4'>
            <div
              className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center'
              style={{ backgroundImage: `url(${learningPath.thumbnail})` }}
              title='Woman holding a mug'
            ></div>
            <div className='w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
              <div className='mb-8'>
                <p className='text-sm text-gray-600 flex items-center'>Free</p>
                <div className='text-gray-900 font-bold text-xl mb-2'>
                  {learningPath.name}
                </div>
              </div>
              <div className='flex items-center'>
                <img
                  className='w-10 h-10 rounded-full mr-4'
                  src={learningPath.thumbnail}
                  alt='Avatar of Jonathan Reinink'
                />
                <div className='text-sm'>
                  <p className='text-gray-900 leading-none'>Jonathan Reinink</p>
                  <p className='text-gray-600'>Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      );
    });
  };
  return (
    <>
      <h1 className='text-3xl mt-4 font-bold'>LEARNING PATH</h1>
      {renderLearningPaths()}{' '}
    </>
  );
};

export default LearningPathsPage;
