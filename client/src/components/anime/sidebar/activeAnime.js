import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const activeAnime = ({ anime }) => {
  const divStyle = {
    backgroundImage:
      "url(" +
      "https://static.akacdn.ru/files/images/2019/08/f66b30a5672beef7ae6654d540390544.jpg-w650-h350" +
      ")"
  };

  return (
    <div className='h-40 w-full'>
      <div
        className='  relative h-full  bg-cover bg-center bg-no-repeat'
        style={divStyle}
      >
        <div className='absolute bottom-1/2 left-3/5 opacity-75'>
          <Link className='' to={`/watch/${anime[0].title}`}>
            <FontAwesomeIcon icon={faPlayCircle} size='3x' />
          </Link>
        </div>

        <div className='absolute bottom-0 text-white px-2'>
          <Link className=' text-white' to={`/watch/${anime[0].title}`}>
            {anime[0].title}
          </Link>
          <div className=' flex row text-xs   '>
            <span className='pr-2'>
              <FontAwesomeIcon icon={faEye} /> {anime[0].view}
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} /> {anime[0].favorited}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default activeAnime;
