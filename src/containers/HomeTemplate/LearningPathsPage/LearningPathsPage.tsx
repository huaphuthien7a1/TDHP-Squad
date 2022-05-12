import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IRootState from "models/IRootState";
import {
  actFetchLearningPaths,
  actFetchSearchLearningPaths,
} from "redux/actions/learningPath.action";
import Spinner from "components/Spinner";
import SearchBar from "components/SearchBar";
import { motion } from "framer-motion";
import { RatingStar } from "rating-star";
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

  const getSearchValue = (data: any): any => {
    if (data.value === "") {
      dispatch(actFetchLearningPaths() as any);
    } else {
      dispatch(actFetchSearchLearningPaths(data.value) as any);
    }
  };

  const renderLearningPaths = () => {
    if (isLoadingLearningPaths) return <Spinner />;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none gap-x-6 lg:gap-x-0">
        {learningPaths.map((learningPath: any) => {
          return (
            <Link
              to={{
                pathname: `/learning-path/${learningPath._id}`,
                state: { learningPath: learningPath },
              }}
              key={learningPath._id}
            >
              <div className="max-w-sm w-full lg:max-w-full lg:flex my-4 hover:-translate-y-2 ease-out duration-300">
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center"
                  style={{
                    backgroundImage: `url(${learningPath.thumbnail.url})`,
                  }}
                  title="Woman holding a mug"
                ></div>
                <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
                  <div className="mb-2">
                    <div className="text-gray-900 font-bold text-xl">
                      {learningPath.name}
                    </div>
                  </div>

                  <div className="font-medium text-gray-900">
                    <i className="far fa-graduation-cap"></i>
                    <span className="ml-2">{`${learningPath.courses.length} Courses`}</span>
                  </div>
                  <div className="ml-[-8px] mb-1">
                    <RatingStar
                      maxScore={5}
                      id={learningPath._id}
                      rating={learningPath.rating}
                      size={15}
                    />
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={learningPath.thumbnail.url}
                      alt="Avatar of Jonathan Reinink"
                    />
                    <div className="text-sm flex flex-col justify-between">
                      <p className="text-gray-900 mb-0 ">Jonathan Reinink</p>
                      <p className="text-gray-600 mb-0">Aug 18</p>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <SearchBar getSearchValue={getSearchValue} />
      <h1 className="text-3xl mt-4 font-bold">LEARNING PATH</h1>
      {renderLearningPaths()}{" "}
    </motion.div>
  );
};

export default LearningPathsPage;
