import { FC } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";

const DetailLearningPathPage: FC = (props: any) => {
  const learningPath = props.location.state.learningPath;

  return (
    <div>
      <h1 className="text-3xl mt-4 font-bold mb-10">LEARNING PATH</h1>
      <div className="flex flex-col lg:flex-row bg-primary bg-opacity-30 mb-14 rounded-xl">
        <div className="w-full lg:w-1/3 p-4 h-64 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={learningPath.thumbnail.url}
            alt=""
          />
        </div>
        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-3xl mb-6 font-medium text-secondary">
            {learningPath.name}
          </h2>
          <div className="text-lg flex items-center text-secondary">
            Rating:{" "}
            <RatingStar
              maxScore={5}
              id={learningPath._id}
              rating={learningPath.rating}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 xl:gap-x-12">
        {typeof learningPath.courses[0] !== "string" &&
          learningPath.courses.map((course: any) => {
            return (
              <div
                className="mb-6 lg:mb-0 hover:-translate-y-2 ease-out duration-300"
                key={course._id}
              >
                <div className="relative block bg-white rounded-lg shadow-lg">
                  <div className="flex justify-center">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={course.thumbnail.url}
                        className="w-full"
                        alt=""
                      />
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
    </div>
  );
};
export default DetailLearningPathPage;
