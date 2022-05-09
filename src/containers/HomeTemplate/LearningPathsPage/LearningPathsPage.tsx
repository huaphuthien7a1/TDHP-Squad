import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from 'models/IRootState';
import { actFetchLearningPaths } from 'redux/actions/learningPath.action';
import Spinner from 'components/Spinner';

const LearningPathsPage: FC = () => {
  const dispatch = useDispatch();
  const [learningPaths, setLearningPaths] = useState([]);
  const isLoadingLearningPaths = useSelector(
    (state: IRootState) => state.learningPathReducer.isLoading
  );
  const listLearningPath = useSelector(
    (state: IRootState) => state.learningPathReducer.listLearningPath
  );
  useEffect(() => {
    dispatch(actFetchLearningPaths() as any);
  }, []);
  useEffect(() => {
    setLearningPaths(listLearningPath);
  }, [listLearningPath]);
  const renderLearningPaths = () => {
    if (isLoadingLearningPaths) return <Spinner />;
    return (
      <div>
        {learningPaths.map((learningPath: any) => {
          return (
            <Link
              to={`/learning-path/${learningPath._id}`}
              key={learningPath._id}
            >
              <div className='max-w-sm w-full lg:max-w-full lg:flex my-4 hover:-translate-y-2 ease-out duration-300'>
                <div
                  className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center'
                  style={{
                    backgroundImage: `url(${learningPath.thumbnail.url})`,
                  }}
                  title='Woman holding a mug'
                ></div>
                <div className='w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                  <div className='mb-8'>
                    <div className='text-gray-900 font-bold text-xl mb-2'>
                      {learningPath.name}
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <img
                      className='w-10 h-10 rounded-full mr-4'
                      src={learningPath.thumbnail.url}
                      alt='Avatar of Jonathan Reinink'
                    />
                    <div className='text-sm'>
                      <p className='text-gray-900 leading-none'>
                        Jonathan Reinink
                      </p>
                      <p className='text-gray-600'>Aug 18</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <h1 className='text-3xl mt-4 font-bold'>LEARNING PATH</h1>
      {renderLearningPaths()}{' '}
    </>
  );
};

export default LearningPathsPage;
