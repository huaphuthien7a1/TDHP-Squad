import React, { useState } from "react";
import ReactPlayer from "react-player";
import { RatingStar } from "rating-star";

const DetailCoursePage = (props: any) => {
  const course = props.location.state.course;
  const [videoInfo, setVideoInfo] = useState({
    url: course ? course.videos[0].url : "",
    name: course ? course.videos[0].name : "",
    videoId: course ? course.videos[0]._id : "",
  });

  const handleChooseVideo = (video: any) => {
    setVideoInfo(video);
  };

  return (
    <div>
      <h1 className="text-3xl mt-4 font-bold mb-10">{course.name}</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 m-3">
          <div className="w-full h-96 ">
            <ReactPlayer
              width="100%"
              playing={true}
              controls={true}
              url={videoInfo.url}
              style={{
                backgroundColor: "black",
              }}
            />
          </div>
          <h2 className="text-xl px-4 mb-10 font-semibold text-black">
            {videoInfo.name}
          </h2>

          <div className="p-6 w-full bg-gray-200 rounded-xl relative">
            <h3 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xl font-medium px-6 py-3 bg-secondary text-white rounded-full">
              Course Information
            </h3>
            <h4 className="text-lg mb-3 font-medium text-black">
              {course.name}
            </h4>
            <div>
              <p className="leading-6">{course.description}</p>
            </div>
            <div className="mb-2">
              <i className="mr-2 text-secondary far fa-eye"></i>
              {course.views} Views
            </div>
            <div className="flex items-center font-medium ml-[-8px]">
              <RatingStar
                maxScore={5}
                id={course._id}
                rating={course.rating}
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 m-3 lg:h-[35rem] overflow-auto scrollbar-hide">
          {course.videos.map((video: any) => {
            return (
              <div
                key={video._id}
                className={`${
                  videoInfo.videoId === video._id
                    ? "bg-lightSecondary"
                    : "hover:bg-gray-50"
                } w-full flex items-stretch gap-x-3 border-b-2 border-gray-200 p-3 cursor-pointer rounded-xl`}
                onClick={() =>
                  handleChooseVideo({
                    url: video.url,
                    name: video.name,
                    videoId: video._id,
                  })
                }
              >
                <img
                  className="w-36 h-28 object-cover rounded-xl"
                  src={course.thumbnail.url}
                  alt=""
                />
                <h4
                  className={`text-lg ${
                    videoInfo.videoId === video._id
                      ? "text-white"
                      : "text-black"
                  } font-medium truncate mt-2`}
                >
                  {video.name}
                </h4>
              </div>
            );
          })}
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default DetailCoursePage;
