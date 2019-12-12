import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  return (
    <div className='flex justify-start '>
      <div className='w-full lg:w-9/12 '>
        <div className='flex flex-row'>
          <div className='lg:w-5 m-4 '>
            <span className='fa-layers fa-fw '>
              <FontAwesomeIcon
                icon={faUser}
                size='3x'
                color='white'
                transform='down-4'
              />
            </span>
          </div>
          <div className='w-11/12 m-4'>
            <input
              type='text'
              className='h-24 w-full'
              placeholder='Join the discussion...'
            />
          </div>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 flex  ml-auto m-4'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comments;
