import React from "react";

const TipToolLayout = ({ anime }) => {
  return (
    <div className='flex flex-col relative  text-white w-auto  h-auto'>
      <h1 className='text-3xl text-color'>{anime[0].title} </h1>
      <div className='border-0 bg-gray-500 font-thin text-sm mb-2'>
        Episode 11/12
      </div>
      <div className=' text-base mb-2 h-12'>
        <p className='font-hairline text-wrap h-full break-normal truncate'>
          {anime[0].description}{" "}
        </p>
      </div>
      <div className='font-bold text-base mb-2 '>
        <p>Scores: {anime[0].score}</p>
        <p>Status: {anime[0].status} </p>
        <p> Date aired: {anime[0].date_air}</p>
        <p>Genre: {anime[0].genre} </p>
      </div>
      <div className='  w-full bg-theme-color text-center h-8  '>
        <button className='text-lg'> WATCH NOW!</button>
      </div>
    </div>
  );
};

export default TipToolLayout;
