import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import StarRatingComponent from "react-star-rating-component";

const DescriptionBox = ({ anime }) => {
  const [rating, setRating] = useState(1);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  const onStarHover = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  const onStarHoverOut = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  return (
    <div className='container mx-auto mt-1'>
      <div className='flex '>
        <div className='w-full lg:w-9/12 '>
          <div className='flex flex-row bg-gray-200 py-2 px-2 '>
            <div className='lg:w-1/6 relative'>
              <img className='' src={anime[0].img} alt='' />
            </div>
            <div className='lg:w-full ml-5 '>
              <div className='flex flex-row justify-between'>
                <h1 className='text-3xl'> {anime[0].title}</h1>

                <StarRatingComponent
                  name='rate1'
                  startCount={5}
                  value={rating}
                  onStarClick={onStarClick}
                  onStarHover={onStarHover}
                  onStarHoverOut={onStarHoverOut}
                />
              </div>

              <div className='flex flex-row '>
                <ol className=''>
                  <li>Type:{anime[0].type}</li>
                  <li>Studios:{anime[0].studio}</li>
                  <li>Date aired: {anime[0].date_aired}</li>
                  <li>Status: {anime[0].status}</li>
                  <li>Genre: {anime[0].genre}</li>
                </ol>

                <ol className='ml-5'>
                  <li>Scores:{anime[0].scores}</li>
                  <li>Rating:{anime[0].rating}</li>
                  <li>Premiered:{anime[0].premiered}</li>
                  <li>Duration:{anime[0].duration}</li>
                  <li>Quality:{anime[0].quality}</li>
                </ol>
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
