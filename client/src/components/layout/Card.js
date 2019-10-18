import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Card = ({ anime }) => {
  const divStyle = {
    backgroundImage:
      "url(" +
      "https://static.akacdn.ru/files/images/2019/08/f66b30a5672beef7ae6654d540390544.jpg-w650-h350" +
      ")"
  };
  return (
    <div className="flex">
      <div className="w-full md:w-3/12 lg:w-3/12">
        <div className="h-40 w-full">
          <div
            className="  relative h-full  bg-cover bg-center bg-no-repeat text-center  "
            style={divStyle}
          >
            <div className="absolute bottom-1/2 left-1/2 opacity-75">
              <a className="" href={anime[0].url}>
                <FontAwesomeIcon icon={faPlayCircle} size="3x" />
              </a>
            </div>

            <div className="absolute bottom-0 text-white px-2">
              <a className=" text-white" href={anime[0].url}>
                {anime[0].title}
              </a>
              <div className=" flex row text-xs   ">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faEye} /> {anime[0].view}
                </span>
                <span>
                  <FontAwesomeIcon icon={faHeart} /> {anime[0].favorited}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
