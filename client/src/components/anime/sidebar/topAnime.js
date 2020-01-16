import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TopAnime = ({ tab, anime, activeTab }) => {
  let comp;

  if (activeTab === "Week") {
    comp = <h1 className='text-white'> Week</h1>;
  } else if (activeTab === "Month") {
    comp = <h1 className='text-white'> Month </h1>;
  } else {
    comp = (
      <div className='flex flex-row flex-wrap '>
        {anime.map(item => {
          return (
            <div
              className='flex flex-row items-center border-b border-gray-700 h-30   w-64 ml-2 text-white'
              key={item.id}
            >
              <div className='border border-solid border-gray-500  px-3 '>
                <i className='  '>{item.id}</i>
              </div>
              <div className=' h-20 w-12 ml-2 '>
                <Link to={`/watch/${item.title}`}>
                  {" "}
                  <img
                    className='object-cover h-full w-full'
                    src={item.image_url}
                    alt=''
                  />
                </Link>
              </div>
              <div className='   ml-3 w-40 font-Roboto font-style: italic'>
                <Link to={`/watch/${item.title}`}>
                  <h2>{item.title}</h2>
                </Link>
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
    );
  }

  return (
    <div>
      {tab.map(child => {
        if (child.label !== activeTab) return undefined;
        return <Fragment>{comp}</Fragment>;
      })}
    </div>
  );
};

export default TopAnime;
