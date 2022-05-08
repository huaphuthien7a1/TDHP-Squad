import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { URL_GET_COURSES } from "redux/urlAPI";

const DetailCoursePage = () => {
  const location: any = useLocation();
  const courseId = location.state?.courseId;

  const [videoInfo, setVideoInfo] = useState({});

  useEffect(() => {
    async function fetchVideoInfo() {
      try {
        const response = await axios.get(`${URL_GET_COURSES}/${courseId}`);
        const responseJSON = response.data;

        setVideoInfo(responseJSON);
      } catch (error: any) {
        console.log("Failed to fetch course: ", error.message);
      }
    }

    fetchVideoInfo();
    console.log(videoInfo);
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="w-1/3 m-3 h-[35rem] overflow-auto scrollbar-hide">
          <div className="w-full flex gap-3 border-b-2 border-gray-200 py-3">
            <img
              className="w-36 h-28 object-cover rounded-lg"
              src="https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg="
              alt=""
            />
            <h4 className="text-lg text-secondary font-medium truncate leading-[7rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              officiis saepe commodi? Ipsa, provident est! Cum eum velit
              asperiores dolorem veritatis deserunt voluptatum aspernatur
              recusandae minima, voluptatem explicabo id consectetur.
            </h4>
          </div>
        </div>
        <div className="w-2/3 m-3">
          <div className="w-full mb-3 h-96 ">
            <ReactPlayer
              width="100%"
              playing={true}
              controls={true}
              url="https://www.youtube.com/watch?v=oBQPn_rGkQw"
            />
          </div>
          <h2 className="text-xl font-semibold text-secondary">
            Cho Những Gì Ta Yêu - TeA x Tuyết x VoVanDuc (Official Audio)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailCoursePage;
