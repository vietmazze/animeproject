import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const VideoPlayer = () => {
  const [activeColor, setActivecolor] = useState("rgb(51, 51, 51)");

  const onClickEvent = e => {
    console.log(e.target.id);
    setActivecolor("black");
  };

  return (
    <div
      className="container mx-auto mt-1"
      style={{ backgroundColor: activeColor }}
    >
      <div className="flex  ">
        <div className="w-full lg:w-9/12 ">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=LMTGQqUUyzk"
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
          <div className="flex flex-row ">
            <button className=" py-2 m-2" id="autoplay" onClick={onClickEvent}>
              <span className="pr-1">
                <FontAwesomeIcon icon={faSquare} size="xs" />
              </span>
              Auto Play
            </button>
            <button className=" py-2 m-2" id="autonext" onClick={onClickEvent}>
              <span className="pr-1">
                <FontAwesomeIcon icon={faSquare} size="xs" />
              </span>
              Auto Next
            </button>
            <button className=" py-2 m-2" id="lightoff" onClick={onClickEvent}>
              <span className="pr-1">
                <FontAwesomeIcon icon={faLightbulb} size="xs" />
              </span>
              Light Off
            </button>
            <button className=" py-2 m-2" id="bookmark" onClick={onClickEvent}>
              <span className="pr-1">
                <FontAwesomeIcon icon={faLightbulb} size="xs" />{" "}
              </span>{" "}
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;
