import React, { useState } from "react";
import ReactPlayer from "react-player";
import { RatingStar } from "rating-star";

const DetailCoursePage = (props: any) => {
  const [videoInfo, setVideoInfo] = useState({
    url: "",
    name: "",
  });
  const course = props.location.state.course;

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
            />
          </div>
          <h2 className="text-xl px-4 mb-8 font-semibold text-secondary">
            {videoInfo.name}
          </h2>
          <div className="p-4 border-t-[1px] border-primary opacity-60">
            <h3 className="text-center text-xl font-medium text-secondary">
              Course Information
            </h3>
            <h4 className="text-lg mb-3">
              <span className="font-medium text-secondary">Course name: </span>
              {course.name}
            </h4>
            <div className="mb-3 text-secondary">
              <i className="mr-2 far fa-eye"></i>
              {course.views} Views
            </div>
            <div className="flex items-center font-medium mb-3 text-secondary">
              Rating:{" "}
              <RatingStar maxScore={5} id={course._id} rating={course.rating} />
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-secondary">
                Description:
              </h4>
              <p className="leading-6 text-secondary">{course.description}</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 m-3 lg:h-[35rem] overflow-auto scrollbar-hide">
          {course.videos.map((video: any) => {
            return (
              <div
                key={video._id}
                className="w-full flex gap-3 border-b-2 border-gray-200 py-3 cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  handleChooseVideo({ url: video.url, name: video.name })
                }
              >
                <img
                  className="w-36 h-28 object-cover rounded-lg"
                  src={course.thumbnail.url}
                  alt=""
                />
                <h4 className="text-lg text-secondary font-medium truncate leading-[7rem]">
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
