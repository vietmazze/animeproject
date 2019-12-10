import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DescriptionBox = ({ anime }) => {
  return (
    <div className='container mx-auto mt-1'>
      <div className='flex'>
        <div className='w-full lg:w-9/12 '>
          <div className='flex flex-row bg-gray-200 py-2 px-2'>
            <div className='lg:w-1/4'>
              <img className='' src={anime[0].img} alt='' />
            </div>
            <div className='lg:w-3/4 px-4'>
              <h1 className='text-3xl'> {anime[0].title}</h1>

              <div className='flex flex-row'>
                <div className='lg:w-1/2'>
                  <ol className='list-disc pl-4 '>
                    <li>Type:{anime[0].type}</li>
                    <li>Studios:{anime[0].studio}</li>
                    <li>Date aired: {anime[0].date_aired}</li>
                    <li>Status: {anime[0].status}</li>
                    <li>Genre: {anime[0].genre}</li>
                  </ol>
                </div>
                <div className='lg:w-1/2'>
                  <ol className='list-disc'>
                    <li>Scores:{anime[0].scores}</li>
                    <li>Rating:{anime[0].rating}</li>
                    <li>Premiered:{anime[0].premiered}</li>
                    <li>Duration:{anime[0].duration}</li>
                    <li>Quality:{anime[0].quality}</li>
                  </ol>
                </div>
              </div>

              <h1 className='text-base py-3'> {anime[0].description}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
