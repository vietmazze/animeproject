import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ tab, anime, activeTab }) => {
  return (
    //This is not presentational
    <div className='flex '>
      <div className='w-3/12 '>
        {anime.map(item => {
          return (
            <div className='flex flex-row items-center border-b border-gray-700 h-30   w-64 ml-2 text-white'>
              <div className='border border-solid border-gray-500  px-3 '>
                <i className='  '>{item.id}</i>
              </div>
              <div className='  h-20 w-12 ml-2 '>
                <a href={item.url}>
                  {" "}
                  <img
                    className='object-cover h-full w-full'
                    src={item.img}
                    alt=''
                  />
                </a>
              </div>
              <div className='   ml-3 w-40 font-style: italic'>
                <a href={item.url}>
                  <h2>{item.title}</h2>
                </a>
                <div className='flex row text-xs '>
                  <span className='pr-2'>
                    <FontAwesomeIcon icon={faEye} /> {item.view}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faHeart} /> {item.favorited}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
